"use server";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

// Stub: logs signup. Full Resend integration added in Task 12.
export async function submitEmailSignup(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const email = formData.get("email") as string;
  if (!email) return { success: false, error: "Email is required." };
  console.log("Email signup (stub):", email);
  return { success: true };
}

// Stub: will be replaced in Task 12 with full implementation.
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  console.log("Contact form (stub):", Object.fromEntries(formData));
  return { success: true };
}
