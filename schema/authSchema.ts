import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export { forgotPasswordSchema };

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export const ResetPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ResetPasswordType = z.infer<typeof ResetPasswordSchema>;

export const userFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  country: z.string().min(1, { message: "Please select a country" }),
  phoneNumber: z.string().regex(/^\+?[0-9\s\-()]{7,}$/, {
    message: "Please enter a valid phone number",
  }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  state: z.string().min(2, { message: "State must be at least 2 characters" }),
  zipCode: z.string().regex(/^[0-9]{5}(-[0-9]{4})?$/, {
    message: "Please enter a valid zip code (e.g., 12345 or 12345-6789)",
  }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),
});

export type UserFormValues = z.infer<typeof userFormSchema>;

export const otpSchema = z.object({
  verification_code: z
    .string()
    .length(4, "OTP required")
    .regex(/^\d+$/, "Only numbers allowed"),
});

export type OtpSchema = z.infer<typeof otpSchema>;

export const profileSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  last_name: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone_number: z.string().optional(),
  country_id: z.string().min(1, { message: "Please select a country" }),
  state: z.string().min(1, { message: "Please select a state" }),
  city: z.string().min(1, { message: "Please select a city" }),
  zip_code: z.string().optional(),
  address: z.string().optional(),
  profile_photo: z.instanceof(File).optional().or(z.literal(null)),
});

export type ProfileFormData = z.infer<typeof profileSchema>;

// export interface UserProfile {
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone_number: string;
//   country_id: string;
//   state: string;
//   city: string;
//   address: string;
//   zip_code: string;
//   profile_photo: File | null;
// }
