export type TestimonialResponse = {
  success: boolean;
  message: string;
  data: TestimonialData[];
  meta: {
    current_page: number;
    total: number;
    per_page: number;
    last_page: number;
  };
};

export type TestimonialData = {
  id: string;
  name: string;
  post: string;
  note: string;
  user_image: string;
};
