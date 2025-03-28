import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export { forgotPasswordSchema };

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export const ResetPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ResetPasswordType = z.infer<typeof ResetPasswordSchema>;
