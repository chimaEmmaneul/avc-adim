export const USERMANAGEMENTENDPOINTS = {
  GET_ALL_ACIVE_USERS: (status: string) =>
    `admin/users?status=active&search=${status}`,
  GET_ALL_USERS: (status: string) => `admin/users?search=${status}`,
  GET_ALL_INACTIVE_USERS: (status: string) =>
    `admin/users?status=inactive&search=${status}`,
  GET_ALL_BANNED_USERS: (status: string) =>
    `admin/users?status=banned&search=${status}`,
  GET_ALL_EMAILUNVERIFIED_USERS: (status: string) =>
    `admin/users?status=pending&search=${status}`,
  SEND_EMAIL: "admin/users/bulk-email",
};
