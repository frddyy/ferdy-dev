const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Project_Podface', path: '/project/podface' },
  { name: 'Project_PresenceApp', path: '/project/presence-app' },
  { name: 'Project_RecipeBook', path: '/project/recipe-book' },
  { name: 'Project_PaymentGateway', path: '/project/payment-gateway-service' },
  { name: 'Project_EmoSync', path: '/project/emosync' }
];

async function imageToPdf(imageBuffer, outputPath, width, height) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([width, height]);
  const image = await pdfDoc.embedPng(imageBuffer);
  
  page.drawImage(image, { x: 0, y: 0, width: width, height: height });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytes);
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 1080, deviceScaleFactor: 2 });
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);

  for (const route of routes) {
    console.log(`🚀 Capturing ${route.name}...`);
    
    try {
      await page.goto(`http://localhost:3000${route.path}`, { waitUntil: 'networkidle2' });

      await page.evaluate(() => {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
        
        // Stretch the mesh background
        const meshBg = document.querySelector('.fixed.inset-0');
        if (meshBg) {
          meshBg.style.position = 'absolute';
          meshBg.style.height = `${document.documentElement.scrollHeight}px`;
        }

        // Hide DevTools
        const devTools = document.querySelector('#devtools-indicator');
        const nextBadge = document.querySelector('[data-next-badge-root="true"]');
        if (devTools) devTools.remove();
        if (nextBadge) nextBadge.remove();
      });

      // 1. Scroll to trigger all lazy-loading Next.js images
      await autoScroll(page);

      // 2. THE IMAGE FIX: Actively wait for every single image to finish downloading
      console.log(`   ⏳ Waiting for all high-res photos to load...`);
      await page.evaluate(async () => {
        const images = Array.from(document.querySelectorAll('img'));
        await Promise.all(images.map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise(resolve => {
            img.addEventListener('load', resolve);
            img.addEventListener('error', resolve); // Don't hang if an image link is broken
          });
        }));
      });

      // 3. Buffer: Wait 3 extra seconds for Next.js "blur" or Framer Motion fade-in animations to finish
      await new Promise(r => setTimeout(r, 5000)); 

      const dimensions = await page.evaluate(() => ({
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight
      }));

      console.log(`   📸 Taking full-page screenshot (${dimensions.height}px)...`);
      const screenshot = await page.screenshot({ fullPage: true });

      await imageToPdf(
        screenshot, 
        `Ferdy_Portfolio_${route.name}.pdf`, 
        dimensions.width, 
        dimensions.height
      );

      console.log(`✅ Saved: Ferdy_Portfolio_${route.name}.pdf\n`);
    } catch (err) {
      console.error(`❌ Failed to print ${route.name}:`, err.message);
    }
  }

  await browser.close();
  console.log('🏁 All PDF "Strips" generated successfully!');
})();

async function autoScroll(page){
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      // We slow down the scroll slightly to give images more time to request
      let distance = 100;
      let timer = setInterval(() => {
        let scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if(totalHeight >= scrollHeight){
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 75); // Slower scroll
    });
  });
}