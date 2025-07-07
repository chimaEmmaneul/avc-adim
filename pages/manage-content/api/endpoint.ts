export const MANAGECONTENTENDPOINTS = {
  GET_TESTIMONIAL: "admin/testimonial",
  ADD_TESTIMONIAL: "admin/testimonial/add",
  UPDATE_TESTIMONIAL: (id: string) => `admin/testimonial/update/${id}`,
  DELETE_TESTIMONIAL: (id: string) => `admin/testimonial/delete/${id}`,
  ADD_FOOTER_LINK: "admin/social-links/add",
  GET_CONTACTUS_DETAILS: "admin/website-setting",
  UPDATE_CONTACT_US: "admin/update-website",
};
