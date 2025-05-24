import { ApiClient } from "@/api";
import { MANAGECONTENTENDPOINTS } from "./endpoint";

export const ManageContentClient = {
  addTestimonial: async (data: FormData): Promise<any> => {
    ApiClient.post(MANAGECONTENTENDPOINTS.ADD_TESTIMONIAL, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
