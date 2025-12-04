"use server";

import { actionClient } from "./safe-action";

import { getStartedFormSchema } from "@/lib/form-schema";


export const getStartedAction = actionClient
  .inputSchema(getStartedFormSchema)
  .action(async ({ parsedInput }) => {
    try {
      // Send email via MailBirdie
      const emailResponse = await fetch("https://mail.mailbirdie.com/api/v1/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "MailBirdie2024!ApiKey#VerySecure123",
        },
        body: JSON.stringify({
          to: "karthik@talentmicro.com",
          from: "noreply@mailbirdie.com",
          subject: `New BookToAudio Inquiry from ${parsedInput.name}`,
          text: `
Name: ${parsedInput.name}
Email: ${parsedInput.email}
Phone: ${parsedInput.phone || "Not provided"}
Book Title: ${parsedInput.bookTitle}
Word Count: ${parsedInput.wordCount || "Not specified"}
Message: ${parsedInput.message || "No additional message"}
          `,
          html: `
<h2>New BookToAudio Get Started Request</h2>
<p><strong>Name:</strong> ${parsedInput.name}</p>
<p><strong>Email:</strong> ${parsedInput.email}</p>
<p><strong>Phone:</strong> ${parsedInput.phone || "Not provided"}</p>
<p><strong>Book Title:</strong> ${parsedInput.bookTitle}</p>
<p><strong>Estimated Word Count:</strong> ${parsedInput.wordCount || "Not specified"}</p>
<p><strong>Additional Message:</strong></p>
<p>${parsedInput.message || "No additional message"}</p>
          `,
        }),
      });

      const responseData = await emailResponse.json();

      if (!emailResponse.ok) {
        throw new Error(`Failed to send email: ${JSON.stringify(responseData)}`);
      }

      return {
        success: true,
        message: "Thank you! We'll get back to you soon.",
      };
    } catch (error) {
      throw error; // Re-throw to trigger the onError handler
    }
  });
