export type SiteDetailsResponse = {
  success: boolean;
  message: string;
  data: {
    title: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    site_logo: string;
    contact_side_image: string | null;
    operation_hour: string;
    vision: string;
    mission: string;
  };
};
