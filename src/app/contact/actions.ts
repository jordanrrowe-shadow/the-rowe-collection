"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    await resend.emails.send({
      from: "The Rowe Collection <noreply@therowecollection.com>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[TRC Contact] ${subject} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function submitEmailSignup(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const email = formData.get("email") as string;

  if (!email) {
    return { success: false, error: "Email is required." };
  }

  try {
    await resend.emails.send({
      from: "The Rowe Collection <noreply@therowecollection.com>",
      to: process.env.CONTACT_EMAIL!,
      subject: `[TRC] New newsletter signup: ${email}`,
      text: `New email signup: ${email}`,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
