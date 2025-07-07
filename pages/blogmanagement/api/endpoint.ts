export const BLOGMANAGEMENTENDPOINTS = {
  GET_ALL_CATEGORY: "admin/blog/categories",
  GET_ALL_BLOGS: "admin/blog",
  ADD_NEW_BLOG: "admin/blog/create",
  GET_ALL_BLOG_CATEGORY: "admin/blog-category",
  ADD_NEW_BLOG_CATEGORY: "admin/blog-category/create",
  GET_BLOG_DETAILS: (id: string) => `admin/blog/details/${id}`,
  DELETE_BLOG: (id: string) => `admin/blog/delete/${id}`,
  UPDATE_BLOG: (id: string) => `admin/blog/update/${id}`,
};
