import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


import CryptoJS from "crypto-js";

// Function to encrypt email
export const encryptEmail = (email: string) => {
  const secretKey = process.env.NEXT_PUBLIC_ENCRYTION_STRING!;
  const encrypted = CryptoJS.AES.encrypt(email, secretKey).toString();
  return encrypted;
};

export const decryptEmail = (encryptedEmail: string) => {
  const secretKey = process.env.NEXT_PUBLIC_ENCRYTION_STRING!;
  const bytes = CryptoJS.AES.decrypt(encryptedEmail, secretKey);
  const decryptedEmail = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedEmail;
};
