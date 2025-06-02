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

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }

    // Format the date
    return date
      .toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
        // hour: "numeric",
        // minute: "2-digit",
        hour12: true,
      })
      .replace(",", ", ");
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Error formatting date";
  }
}

export function formatDateTime(dateTimeStr: string): string {
  console.log(dateTimeStr, "dat");
  const date = new Date(dateTimeStr.replace(" ", "T")); // Convert to ISO format

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleString(undefined, options); // Uses user's locale
}
