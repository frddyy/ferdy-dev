// app/actions/contact.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Please fill out all required fields." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      
      to: process.env.CONTACT_EMAIL as string, 
      
      replyTo: email,
      
      subject: `New Message from ${name}: ${subject}`,
      
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px;">
          <h2>New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { error: "Failed to send message. Please try again later." };
    }

    return { success: true };
    
  } catch (error) {
    console.error("Server Error:", error);
    return { error: "An unexpected error occurred." };
  }
}