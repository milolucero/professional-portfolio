"use server";

import { personalDetails } from "@/lib/data";
import { isValidString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Simple server-side validation
  if (!isValidString(senderEmail, 500)) {
    return {
      error: "Invalid sender email.",
    };
  }

  if (!isValidString(message, 5000)) {
    return {
      error: "Invalid message.",
    };
  }

  resend.emails.send({
    from: `${personalDetails.websiteName} <onboarding@resend.dev>`,
    to: personalDetails.email,
    reply_to: senderEmail as string,
    subject: "New message from contact form",
    text: message as string,
  });
};
