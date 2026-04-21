export const personalInfo = {
  name: "Mochamad Ferdy Fauzan",
  title: "Software Engineer",
  tagline: "Software Engineer building reliable web and mobile solutions with an active focus on applied AI and machine learning",
  bio: "Building scalable platforms that connect engineering depth with human-centric design. I specialize in cross-platform development, leaning into frontend polish while maintaining a strong backend foundation. My current focus is the practical implementation of AI and machine learning within real-world applications."
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/mochamad-ferdy-fauzan",
  github: "https://github.com/frddyy",
  email: "m.ferdyfauzan@gmail.com",
  resume: "/resume.pdf" 
};

export const experiences = [
  { company: "PLN Icon Plus", role: "Software Engineer", duration: "Oct 2025 - Present", achievements: ["Contributed to enterprise digital transformation, reengineering HR systems into a scalable microfrontend architecture.", "Developed and deployed enterprise HR modules with multi-level approval workflows and secure digital verification.", "Collaborated across cross-functional teams using Vue.js and strict RBAC data security boundaries."] },
  { company: "PT Padepokan Tujuh Sembilan", role: "System Analyst & Fullstack Developer", duration: "Jun 2024 - Oct 2024", achievements: ["Architected and led the development of the Presence App, a multi-tenant attendance system later adopted as a commercial product.", "Managed an Agile team of 10+ developers, aligning frontend (React Native & React) and backend (Spring Boot) workflows.", "Designed geofencing validation logic using the Haversine Formula for precise attendance tracking."] },
  { company: "PT Padepokan Tujuh Sembilan", role: "Frontend & Mobile Developer (Freelance)", duration: "Jan 2024 - Feb 2024", achievements: ["Led mobile development for the Recipe Book App — owning all mobile UI and REST API integrations end-to-end.", "Collaborated within a 15+ member Agile team to complete the full development cycle within a one-month timeline.", "Delivered a project formally adopted as the benchmark reference for evaluating future OJT candidates, recognized for quality and completeness."] },
  // { company: "Himpunan Mahasiswa Komputer (Polban)", role: "Head of HR Work Program Division", duration: "Jan 2023 - Dec 2023", achievements: ["Led a team of 10+ members to design and execute strategic organizational programs.", "Fostered member development and cross-divisional alignment for institutional objectives."] },
  // { company: "LKMM-TD Event (BEM KEMA)", role: "Mentor & Speaker", duration: "2022 & 2023", achievements: ["Delivered public training on leadership and responsibility to an audience of 600+ students.", "Mentored structured leadership groups, fostering team accountability and empathy."] }
];

export const projects = [
  // --- TIER 1: THE POWER FIVE (Fully Expanded Apple Narrative) ---
  { 
    slug: "podface",
    title: "Podface - AI Video Podcast Generator", 
    category: "AI & Desktop Application", 
    context: "Final Academic Project [Group Project]",
    role: "Fullstack AI Engineer",
    summary: "An AI-powered desktop application that humanizes digital content by generating synchronized 3D speech-driven facial animations directly from multi-speaker audio files.", 
    details: {
      problem: "While AI can generate high-quality podcast audio, it lacks a visual component. Existing 3D animation frameworks were limited to processing a single speaker at a time, creating a high barrier to entry for automated video podcasting.",
      solution: "I engineered an advanced pipeline that separates audio tracks (SpeechBrain), standardizes voices (Seed-VC), and constructs 3D meshes (MICA). I then orchestrated these conflicting Python frameworks to communicate seamlessly with a React/Electron frontend.",
      impact: "Registered as an Intellectual Property (DGIP). I learned advanced environment management and asynchronous processing by successfully orchestrating heavy 3D rendering algorithms with a responsive user interface."
    },
    tech: ["Python", "React", "Electron.js", "SpeechBrain", "Seed-VC", "MICA", "VOCA"],
    year: "2025",
    link: "https://drive.google.com/file/d/1yEToRE07B6SYZQDTuKoEiPkSKH_mrS7N/view?usp=sharing",
    images: [
      "/assets/images/portfolio/podface/1.png",
      "/assets/images/portfolio/podface/2.png",
      "/assets/images/portfolio/podface/3.png",
      "/assets/images/portfolio/podface/4.png",
      "/assets/images/portfolio/podface/5.png",
      "/assets/images/portfolio/podface/6.png",
      "/assets/images/portfolio/podface/7.png",
      "/assets/images/portfolio/podface/8.png",
    ]
  },
  { 
    slug: "presence-app",
    title: "Presence App - Attendance System", 
    category: "Enterprise System & Leadership", 
    context: "Professional Internship [Group Project]",
    role: "System Analyst & Fullstack Developer",
    summary: "A real-time, multi-tenant attendance management system utilizing precise geofencing to automate check-ins and reduce HR administrative burdens.", 
    details: {
      problem: "Multiple client companies struggled with employee discipline due to inaccurate, decentralized attendance tracking, creating a massive administrative bottleneck for HR departments calculating payroll.",
      solution: "I led a 10+ developer team from requirements analysis to implementation. I engineered a backend scheduler to automate late arrivals and check-outs, and bypassed React Native native module limitations by customizing an alternative GPS library for strict geofencing accuracy.",
      impact: "Successfully transitioned an internal tool into an adopted commercial product. I learned how to navigate critical framework limitations and manage cross-functional communication to deliver enterprise-grade accuracy."
    },
    tech: ["React Native", "Java Spring Boot", "PostgreSQL", "Redux"],
    year: "2024",
    images: [
      "/assets/images/portfolio/presence-app/1-home.png",
      "/assets/images/portfolio/presence-app/2-leave.png",
      "/assets/images/portfolio/presence-app/3-apply-leave.png",
      "/assets/images/portfolio/presence-app/4-dashboard-admin.png",
      "/assets/images/portfolio/presence-app/5-attendance-admin.png",
      "/assets/images/portfolio/presence-app/6-leaves-admin.png",
      "/assets/images/portfolio/presence-app/7-settings-admin.png",
      "/assets/images/portfolio/presence-app/8-admin-profile.png",
      "/assets/images/portfolio/presence-app/8-all-admin-superadmin.png",
      "/assets/images/portfolio/presence-app/9-all-company.png",
      "/assets/images/portfolio/presence-app/10-company-profile.png"
    ]
  },
  { 
    slug: "recipe-book",
    title: "Recipe Book Application", 
    category: "Mobile Application", 
    context: "Freelance Project [Group Project]",
    role: "Frontend & Mobile Developer",
    summary: "A cross-platform web and mobile application for personalized recipe management, utilizing a unified backend architecture.", 
    details: {
      problem: "The project required validating that a single backend could efficiently serve diverse frontend clients without performance degradation or inconsistent API contracts.",
      solution: "I owned all mobile UI development and REST API integrations, working concurrently with web developers to map out strict data fetching and authentication strategies across both platforms.",
      impact: "Delivered a robust UI that served as a technical benchmark for evaluating future OJT candidates. It solidified my cross-platform development skills and taught me how to architect seamless multi-client API interactions."
    },
    tech: ["React.js", "React Native", "Java Spring Boot", "PostgreSQL"],
    year: "2024",
    images: [
      "/assets/images/portfolio/recipe-book/3-daftar-resep-web.png",
      "/assets/images/portfolio/recipe-book/1-buku-resep-login.jpg",
      "/assets/images/portfolio/recipe-book/2-daftar-resep.jpg",
    ]
  },
  { 
    slug: "payment-gateway-service",
    title: "Payment Gateway Service", 
    category: "Distributed Backend System",
    context: "Individual Project",
    role: "Backend Engineer",
    summary: "A highly resilient backend orchestration service simulating core banking transaction flows with asynchronous event publishing.", 
    details: {
      problem: "Distributed financial systems must handle sudden failures gracefully without dropping transactions or locking up core banking aggregators.",
      solution: "I built a fault-tolerant architecture utilizing Apache Kafka for asynchronous messaging and implemented circuit breaker patterns via Resilience4j to prevent cascading system failures.",
      impact: "Achieved 98% instruction coverage via JaCoCo. I learned rigorous enterprise-grade testing discipline and how to design distributed systems built for resilience rather than just functionality."
    },
    tech: ["Java (Spring Boot 3)", "PostgreSQL", "Apache Kafka", "Resilience4j", "Docker", "JWT", "Flyway"],
    year: "2025",
    link: "https://github.com/frddyy/payment-gateway-cip.git",
    images: [
      "/assets/images/portfolio/payment-gateway/image.png"
    ]
  },
  { 
    slug: "emosync",
    title: "Emosync - Emotion-Based Spotify Playlists", 
    category: "UX & Machine Learning", 
    context: "Academic Project [Group Project]",
    role: "Machine Learning Engineer",
    summary: "A human-centric AI experiment integrating YOLOv8 face detection with Spotify APIs to translate real-time facial expressions into personalized music curation.", 
    details: {
      problem: "Digital music curation often relies on past listening history rather than a user's current, real-time emotional state.",
      solution: "I integrated hardware (webcam) with computer vision (YOLOv8) to detect human emotions, mapping those real-time data points to Spotify's recommendation algorithms.",
      impact: "Showcased an interdisciplinary approach to connecting hardware, software, and emotional UX. I learned how to build fluid user experiences that react immediately to non-traditional data inputs like facial expressions."
    },
    tech: ["Python", "YOLOv8", "Streamlit", "Roboflow"],
    year: "2023",
    images: [
      "/assets/images/portfolio/yolov8-spotify/1-emosync.png",
      "/assets/images/portfolio/yolov8-spotify/2-webcam-happy.png",
      "/assets/images/portfolio/yolov8-spotify/3-webcam-happy-detected.png",
      "/assets/images/portfolio/yolov8-spotify/4-webcam-sad-detected.png"
    ]
  },

  // --- TIER 2: PENDING EXPANSION (Contains TODO Markers) ---
  { 
    slug: "kwp-syariah",
    title: "KWP Syariah Digital Platform", 
    category: "Fullstack Web Application", 
    context: "Professional Contract [Group Project]",
    role: "Fullstack Developer",
    summary: "A syariah-compliant cooperative management platform emphasizing user-centric development through direct User Acceptance Testing (UAT).", 
    details: {
      problem: "The KWP Syariah Cooperative faced a significant hurdle in transitioning from manual record-keeping to a digital ecosystem. Their initial systems were feature-limited and lacked the robust validation required to handle complex Syariah financial transactions, member registrations, and multi-tier administrative approvals safely.",
      solution: "I engineered a Fullstack architecture using Vue.js and Laravel, specifically designed to handle two distinct user workflows. For members, I developed modules for registration and real-time tracking of 'Simpanan' (Deposits) and 'Pembiayaan' (Financing). For officers, I built an administrative command center to manage member data, approve registration requests, and monitor both Conventional and Sharia financial streams with high transparency.",
      impact: "By facilitating a rigorous UAT phase, I bridged the gap between engineering and user needs. The testing validated core functionalities across 10+ modules, ensuring the system could handle live financial data and complex approval chains. This project sharpened my ability to translate strict Syariah financial protocols into secure, role-based software logic that is both scalable and reliable."
    },
    tech: ["Vue.js", "Laravel", "PHP", "MySQL"],
    year: "2024",
    link: "https://drive.google.com/file/d/13miA58joaip6Sh7R6_sg6W3SeFuNG3-0/view",
    images: [
      "/assets/images/portfolio/kwp-app/kwp.png",
      "/assets/images/portfolio/kwp-app/kwp2.png",
      "/assets/images/portfolio/kwp-app/kwp3.png",
      "/assets/images/portfolio/kwp-app/kwp4.png",
      "/assets/images/portfolio/kwp-app/kwp5.png",
      "/assets/images/portfolio/kwp-app/kwp6.png",
    ]
  },
  { 
      slug: "the-themit-of-kliwon",
      title: "The Themit of Kliwon", 
      category: "3D Spatial Design & Gaming", 
      context: "Academic Project [Group Project]",
      role: "Game Developer",
      summary: "An immersive 3D horror game merging software logic with spatial design and interactive storytelling.", 
      details: {
        problem: "The primary challenge was building a cohesive, frightening 3D environment that effectively integrated finding-object mechanics with action elements. I had to ensure that the low-light house setting felt oppressive while maintaining clear pathfinding for the player to search for ritual objects (Buhul) without breaking the immersion of the horror experience.",
        solution: "I used Unreal Engine 5 to handle the core game loop, where the player acts as a paranormal investigator. The environment was meticulously modeled in SketchUp Pro and Blender to create a high-fidelity, realistic house layout. I implemented an interaction system where spirits can be warded off using religious items (Tasbih) and prayers, creating a tense mechanic where the player must balance exploration with defensive actions.",
        impact: "This project taught me how to manage interdisciplinary workflows between architectural modeling and game development. It provided deep insights into lighting design, spatial soundscapes, and how to program interactive triggers (jumpscares) that react to player proximity, resulting in a technically sound and atmospheric exorcism experience."
      },
      tech: ["Unreal Engine 5", "Blender 3D", "SketchUp"],
      year: "2023",
      link: "https://drive.google.com/file/d/1yEToRE07B6SYZQDTuKoEiPkSKH_mrS7N/view?usp=sharing",
      images: [
        "/assets/images/portfolio/horror-game/6-scene-vs-setan.png",
        "/assets/images/portfolio/horror-game/1-menu.png",
        "/assets/images/portfolio/horror-game/2-scene-awal.png",
        "/assets/images/portfolio/horror-game/3-scene-rumah.png",
        "/assets/images/portfolio/horror-game/4-scene-cari-buhul.png",
        "/assets/images/portfolio/horror-game/5-scene-jumpscare.png",
        "/assets/images/portfolio/horror-game/7-scene-attack.png",
        "/assets/images/portfolio/horror-game/8-scene-setan-weak.png",
        "/assets/images/portfolio/horror-game/9-scene-akhir.png"
      ]
  },
  { 
    slug: "tiktics",
    title: "Tiktics - Influencer Recommendation", 
    category: "Data Analytics", 
    context: "Academic Project [Group Project]",
    role: "Fullstack Developer",
    summary: "A social media analytic system designed to recommend TikTok influencers and predict content performance using historical data analysis.", 
    details: {
      problem: "Traditional social media monitoring tools like Brandwatch excel at real-time sentiment analysis but often fail to provide predictive foresight. Marketers face a significant gap when trying to justify influencer partnerships, as there is no standardized way to forecast the future engagement rate of a specific creator's upcoming content based on historical trends.",
      solution: "I engineered a custom ETL pipeline using Python and Selenium to scrape high-fidelity data from over 1,000 top-tier influencers, storing the results in a flexible MongoDB architecture. To solve the prediction gap, I implemented a Statistics Prediction feature using Linear Regression, which analyzes historical engagement metrics to forecast the potential reach of future content. The system then surfaces these insights through a React-based dashboard, allowing users to search by keyword and sort by predicted engagement.",
      impact: "Tiktics provides marketing teams and business partners with a strategic advantage, transforming raw scraped data into actionable predictive insights. Through this project, I gained deep expertise in handling large-scale web scraping, navigating anti-bot limits, and managing the complexities of data cleaning for machine learning models, ultimately enabling more effective and data-driven marketing campaign planning."
    },
    tech: ["Python", "Selenium", "MongoDB", "Flask", "ReactJS"],
    year: "2023",
    link: "https://github.com/daffaraihandika/TikTics",
    images: [
      "/assets/images/portfolio/influencer-recommendation/8-influencer-details.png",
      "/assets/images/portfolio/influencer-recommendation/1-register.png",
      "/assets/images/portfolio/influencer-recommendation/2-login.png",
      "/assets/images/portfolio/influencer-recommendation/3-dashboard.png",
      "/assets/images/portfolio/influencer-recommendation/4-search.png",
      "/assets/images/portfolio/influencer-recommendation/5-top-content.png",
      "/assets/images/portfolio/influencer-recommendation/6-top-influencer.png",
      "/assets/images/portfolio/influencer-recommendation/7-content-details.png",
      "/assets/images/portfolio/influencer-recommendation/9-statistic-prediction.png"
    ]
  },
  { 
    slug: "spendwise",
    title: "SpendWise - Budgeting PWA", 
    category: "Web Application", 
    context: "Academic Project [Group Project]",
    role: "Fullstack Developer",
    summary: "A Progressive Web App designed to simplify personal financial management through intuitive data visualization and real-time recap tracking.", 
    details: {
      problem: "Many users find traditional budgeting tools either too complex or poorly optimized for quick, daily entry. This friction often leads to inconsistent tracking, leaving users without a clear understanding of their cash flow, total balance across multiple accounts, or how their actual spending aligns with their monthly goals.",
      solution: "I developed SpendWise as a Progressive Web App (PWA) to provide a mobile-first, cross-platform experience that ensures high accessibility. Using React and Chakra UI, I engineered a responsive dashboard featuring real-time financial summaries and multi-wallet management. The backend, built with Express and PostgreSQL, powers advanced recap and reporting engines that transform raw transaction data into actionable monthly analytics.",
      impact: "Building SpendWise deepened my expertise in PWA architecture and financial data visualization. Beyond the UI, the project provided a critical lesson in data integrity; I learned to navigate potential race conditions during transaction updates, ensuring that balance calculations remained accurate even during concurrent state changes. This experience bridged the gap between building a functional interface and maintaining a reliable, production-ready backend."
    },
    tech: ["PostgreSQL", "ExpressJS", "ReactJS", "Chakra UI"],
    year: "2023",
    link: "https://github.com/frddyy/budgeting-recap-app",
    images: [
      "/assets/images/portfolio/spendwise-pwa/3-dashboard.png",
      "/assets/images/portfolio/spendwise-pwa/1-sign-in.png",
      "/assets/images/portfolio/spendwise-pwa/2-register.png",
      "/assets/images/portfolio/spendwise-pwa/4-add-wallet.png",
      "/assets/images/portfolio/spendwise-pwa/5-category.png",
      "/assets/images/portfolio/spendwise-pwa/6-add-category.png",
      "/assets/images/portfolio/spendwise-pwa/7-budget.png",
      "/assets/images/portfolio/spendwise-pwa/8-add-budget.png",
      "/assets/images/portfolio/spendwise-pwa/9-add-income.png",
      "/assets/images/portfolio/spendwise-pwa/10-add-expense.png",
      "/assets/images/portfolio/spendwise-pwa/11-recap.png",
      "/assets/images/portfolio/spendwise-pwa/12-report.png"
    ]
  },
  { 
    slug: "digital-image-processing",
    title: "Digital Image Processing Web App", 
    category: "Web Application", 
    context: "Academic Project [Individual Project]",
    role: "Fullstack Developer",
    summary: "A full-stack application performing server-side image manipulation, applying OpenCV transformations like Canny edge detection and histogram equalization to user uploads.", 
    details: {
      problem: "The primary challenge was translating theoretical digital image processing algorithms into a functional web environment. Executing heavy mathematical transformations—such as histogram calculations and edge detection—on a server requires efficient file handling and low-latency processing to ensure the user interface remains responsive after an image upload.",
      solution: "I engineered a Flask-based backend that integrates OpenCV to perform real-time image manipulation. The application allows users to upload photos and select from a suite of operations, including Canny edge detection and histogram equalization. I also implemented a dynamic histogram generation feature and a unique 'Image Puzzle' mini-game that programmatically splits and randomizes image segments to test spatial reconstruction logic.",
      impact: "This project served as a deep dive into the practical application of image processing theorems. I gained significant experience in Python-based backend performance, particularly in managing binary file streams and optimizing OpenCV buffers for web delivery. It taught me how to bridge the gap between scientific computing and interactive web design, creating a tool that is both educational and engaging."
    },
    tech: ["Python", "Flask", "OpenCV", "HTML/CSS", "Bootstrap"],
    year: "2023",
    link: "https://github.com/frddyy/DigitalImageProcessing_Web",
    images: [
      "/assets/images/portfolio/image-processing-web/2.png",
      "/assets/images/portfolio/image-processing-web/1.png",
      "/assets/images/portfolio/image-processing-web/3.png",
      "/assets/images/portfolio/image-processing-web/4.png",
      "/assets/images/portfolio/image-processing-web/5.png"
    ]
  },
  { 
    slug: "portfolify",
    title: "Portfolify - CV Maker", 
    category: "Web Application", 
    context: "Academic Project [Group Project]",
    role: "Fullstack Developer",
    summary: "A web utility tool that allows users to input their data to generate formatted CVs and personal portfolio websites dynamically.", 
    details: {
      problem: "Maintaining a consistent professional brand across both a static PDF CV and a personal website is often a repetitive and time-consuming process. Users struggle with manual formatting and the technical overhead required to keep their online presence synchronized with their latest professional milestones.",
      solution: "I architected a Fullstack solution using the PERN stack (MySQL, Express, React, Node) to centralize professional data. I developed a robust RESTful API to handle CRUD operations for user profiles, experience, and skills. By utilizing React's state management, I enabled a real-time 'live preview' system where user inputs are dynamically injected into pre-designed CV templates and hosted personal web layouts.",
      impact: "As the lead developer, I gained significant experience in designing scalable RESTful architectures and managing collaborative task delegation. This project deepened my understanding of handling complex nested forms and user-generated content, ultimately delivering a system that bridges the gap between raw data entry and professional visual presentation."
    },
    tech: ["MySQL", "Express.js", "React.js", "Material UI"],
    year: "2023",
    link: "https://github.com/frddyy/S3PersonalWeb.git",
    images: [
      "/assets/images/portfolio/cv-maker/1-portolify.png",
      "/assets/images/portfolio/cv-maker/2-register.png",
      "/assets/images/portfolio/cv-maker/3-login.png",
      "/assets/images/portfolio/cv-maker/4-dashboard.png",
      "/assets/images/portfolio/cv-maker/5-personal-web.png"
    ]
  },
  { 
    slug: "coordinate-converter",
    title: "Coordinate Converter", 
    category: "Utility Tool", 
    context: "Individual Project",
    role: "Frontend Developer",
    summary: "A focused utility application for converting mapping coordinates between DMS (Degrees, Minutes, Seconds) and Decimal Degrees formats.", 
    details: {
      problem: "Manual conversion between Degrees, Minutes, Seconds (DMS) and Decimal Degrees (DD) is mathematically tedious and highly prone to human error. For developers and geographers, the lack of a simple, integrated tool that can both calculate these values and instantly visualize them on a map creates a significant bottleneck in spatial data workflows.",
      solution: "I built a React-based utility that automates the conversion logic with real-time feedback. The tool allows users to input coordinates in either format or simply click on an interactive map to generate data points instantly. By integrating mapping libraries with a responsive Tailwind CSS interface, I created a seamless bridge between raw mathematical data and spatial visualization.",
      impact: "This project served as a deep dive into Test-Driven Development (TDD). Given that coordinate precision is critical, I used Jest to implement a robust testing suite for the conversion algorithms, ensuring mathematical accuracy across edge cases. I also learned to manage complex state synchronized with interactive map components, resulting in a high-utility, reliable tool for geographic data management."
    },
    tech: ["React", "Node.js", "Tailwind CSS", "Jest"],
    year: "2024",
    link: "https://github.com/frddyy/coordinate-converter",
    images: [
      "/assets/images/portfolio/coordinate-converter/1.png",
      "/assets/images/portfolio/coordinate-converter/2.png",
      "/assets/images/portfolio/coordinate-converter/3.png",
      "/assets/images/portfolio/coordinate-converter/4.png",
      "/assets/images/portfolio/coordinate-converter/5.png"
    ]
}
];

export const certificates = [
  { title: "AWS Backend Academy (Cloud & Gen AI)", issuer: "Dicoding × AWS", images: ["/assets/images/certs/aws-be-academy/1-cloud-gen-ai.jpg", "/assets/images/certs/aws-be-academy/2-js-fund.jpg", "/assets/images/certs/aws-be-academy/3-js-be.jpg"] },
  { title: "Microsoft Elevate (Data Science & Azure Gen AI)", issuer: "Dicoding × Microsoft", images: ["/assets/images/certs/ms-elevate/1-ds-fabric.jpg", "/assets/images/certs/ms-elevate/2-gen-ai-azure.jpg", "/assets/images/certs/ms-elevate/3-data-processing.jpg"] },
  { title: "IBM SkillsBuild (AI Fundamentals & ML)", issuer: "Dicoding × IBM", images: ["/assets/images/certs/ibm-skillsbuild/1-ai-fund.jpg", "/assets/images/certs/ibm-skillsbuild/2-python-programming.jpg", "/assets/images/certs/ibm-skillsbuild/3-machine-learning.jpg"] },
  { title: "Jr. Backend Spring Boot Developer", issuer: "ArutalaLab", images: ["/assets/images/certs/jr-springboot-dev.jpg"] },
  { title: "Google Cloud Compute Skill", issuer: "Google Cloud", images: ["/assets/images/certs/gcp.png"] }
];

export const achievements = [
  { title: "Registered Software Application (Podface)", description: "DGIP Indonesia - Intellectual Property Certificate", date: "2025", images: ["/assets/images/certs/podface-hki.png"] },
  { title: "3rd Place - Competitive Programming", description: "TISIGRAM HIMAKOM POLBAN", date: "2022", images: ["/assets/images/certs/tisigram-3rd.jpg"] }
];

export const skills = {
  frontend: [
    "Vue.js", "React.js", "React Native", "TypeScript", 
    "JavaScript", "HTML/CSS", "Bootstrap", "Chakra UI"
  ],
  backend: [
    "Java (Spring Boot)", "Python (Flask)", "Node.js (Express.js)", "Laravel (PHP)", 
    "PostgreSQL", "MySQL", "MongoDB", 
    "RESTful API Design", "JWT Authentication", "RBAC"
  ],
  ai: [
    "Generative AI Fundamentals", "AI/ML Fundamentals", "Multi-Model Pipeline Development", 
    "Computer Vision (OpenCV)", "Computer Vision (YOLOv8)", "Speech Processing"
  ],
  delivery: [
    "Docker", "AWS", "Linux", "Git", "GitLab CI/CD", 
    "Automated Testing", "Agile", "System Analysis", "Swagger/OpenAPI", "Figma"
  ]
};

export const education = [
  {
    degree: "Bachelor of Applied Science in Informatics Engineering",
    institution: "Politeknik Negeri Bandung",
    location: "Bandung, Indonesia",
    date: "Sep 2021 – Jul 2025",
    gpa: "3.49 / 4.00",
    project: "The Development of a Desktop Application for Video Podcast Generator Based on Speech Processing and Speech-driven Facial Animation (Podface)",
    coursework: [
      "Data Structures & Algorithms", 
      "Object-Oriented Programming", 
      "Database Systems", 
      "Software Engineering", 
      "Web Programming", 
      "UI/UX Design", 
      "Software Testing"
    ]
  }
];

export const organizations = [
  {
    role: "Head of Work Program Division (2023) | Staff (2022) - Human Resources Department ",
    organization: "Himpunan Mahasiswa Komputer (Polban)",
    duration: "2022 & 2023", 
    description: "Promoted from junior staff to division lead. As Head, orchestrated strategic human capital initiatives for a 10+ member team. Previously, executed foundational HR work programs and member development operations.",
    images: [
      "/assets/images/certs/org/kadiv-himakom.jpg", 
      "/assets/images/certs/org/staff-himakom.jpeg"
    ]
  },
  {
    role: "Speaker (LKMM-TD Training)",
    organization: "LKMM-TD Event — BEM KEMA Polban",
    duration: "2023",
    description: "Delivered public training on 'Discipline and Responsibility' to 60+ direct participants and a total audience of 600+ students, communicating core leadership values across the institution.",
    images: ["/assets/images/certs/org/speaker-lkmm.png"]
  },
  {
    role: "Mentor (LKMM-TD Training)",
    organization: "LKMM-TD Event — BEM KEMA Polban",
    duration: "2022",
    description: "Mentored 23 participants across structured leadership groups, providing detailed performance evaluations and fostering team accountability through hands-on guidance.",
    images: ["/assets/images/certs/org/mentor-lkmm.jpg"]
  }
];

export const languages = [
  { 
    name: "Indonesian", 
    level: "Native", 
  },
  { 
    name: "English", 
    level: "Proficient", 
    description: "TOEIC® Listening & Reading: 805/990" ,
    images: ["/assets/images/certs/toeic.jpg"]
  }
];
