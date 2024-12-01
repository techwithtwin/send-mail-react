import z from "zod";

export const ContactSchema = z.object({
  fullName: z.string().min(3, "Full Name must be atleast 2 characters"),
  email: z.string().email(),
  subject: z.string().min(3, "Subject must be atleast 3 characters"),
  message: z.string().min(5, "At least 5 characters are required"),
});

export type ContactFormdata = z.infer<typeof ContactSchema>;
