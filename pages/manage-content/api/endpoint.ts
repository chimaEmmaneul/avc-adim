export const MANAGECONTENTENDPOINTS = {
  GET_TESTIMONIAL: "admin/testimonial",
  ADD_TESTIMONIAL: "admin/testimonial/add",
  UPDATE_TESTIMONIAL: "/testimonials/:id",
  DELETE_TESTIMONIAL: (id: string) => `dmin/testimonial/delete/${id}`,
};
