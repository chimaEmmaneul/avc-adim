export enum UserStatus {
  ACTIVE = "ACTIVE",
  BANNED = "BANNED",
  EMAIL_UNVERIFIED = "EMAIL_UNVERIFIED",
}

export interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
  status: UserStatus;
}
