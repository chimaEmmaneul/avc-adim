export const USERMANAGEMENTENDPOINTS = {
  GET_ALL_ACIVE_USERS: (request: { search: string; page: number }) =>
    `admin/users?status=active&${request.search}&page=${request.page}`,
  GET_ALL_USERS: (request: { search: string; page: number }) =>
    `admin/users?search=${request.search}&page=${request.page}`,
  GET_ALL_INACTIVE_USERS: (request: { search: string; page: number }) =>
    `admin/users?status=inactive&${request.search}&page=${request.page}`,
  GET_ALL_BANNED_USERS: (request: { search: string; page: number }) =>
    `admin/users?status=blocked&${request.search}&page=${request.page}`,
  GET_ALL_EMAILUNVERIFIED_USERS: (request: { search: string; page: number }) =>
    `admin/users?status=pending&${request.search}&page=${request.page}}`,
  SEND_EMAIL: "admin/users/bulk-email",
};
