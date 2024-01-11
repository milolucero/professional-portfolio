"use server";

import React from "react";
import { personalDetails } from "@/lib/data";
import { getErrorMessage, isValidString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

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

  let data;
  try {
    console.log(`Sending email by ${senderEmail}...`);

    data = await resend.emails.send({
      from: `${personalDetails.websiteName} <onboarding@resend.dev>`,
      to: personalDetails.email,
      reply_to: senderEmail as string,
      subject: "New message from contact form",
      react: React.createElement(ContactFormEmail, {
        senderEmail: senderEmail as string,
        message: message as string,
      }),
    });

    console.log("Email sent.");
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
