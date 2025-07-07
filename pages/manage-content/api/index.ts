import { ApiClient } from "@/api";
import { MANAGECONTENTENDPOINTS } from "./endpoint";

export const ManageContentClient = {
  addTestimonial: async (data: FormData): Promise<any> =>
    ApiClient.post(MANAGECONTENTENDPOINTS.ADD_TESTIMONIAL, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  addFooterLink: async (data: FormData): Promise<any> =>
    ApiClient.post(MANAGECONTENTENDPOINTS.ADD_FOOTER_LINK, data),
  getTestimonial: async (): Promise<any> =>
    ApiClient.get(MANAGECONTENTENDPOINTS.GET_TESTIMONIAL),

  updateTestimonial: async (id: string, data: FormData): Promise<any> =>
    ApiClient.post(MANAGECONTENTENDPOINTS.UPDATE_TESTIMONIAL(id), data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  deleteTestimonial: async (id: string): Promise<any> =>
    ApiClient.delete(MANAGECONTENTENDPOINTS.DELETE_TESTIMONIAL(id)),

  updateContactUs: async (data: FormData): Promise<any> =>
    ApiClient.post(MANAGECONTENTENDPOINTS.UPDATE_CONTACT_US, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  getContactUsDetails: async (): Promise<any> =>
    ApiClient.get(MANAGECONTENTENDPOINTS.GET_CONTACTUS_DETAILS),
};
