export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface CategoriesResponse {
  success: boolean;
  message: string;
  data: Category[];
}
