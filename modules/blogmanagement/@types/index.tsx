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

export type BlogDetailsResponse = {
  success: boolean;
  message: string;
  data: BlogDetails;
};

export type BlogDetails = {
  id: string
  title: string;
  slug: string
  category: string;
  author: string;
  image: string;
  description: string;
  date: string;
};

export type Blog = {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  image: string;
  description: string;
  date: string;
};

export type BlogResponseMeta = {
  current_page: number;
  total: number;
  per_page: number;
  last_page: number;
};

export type BlogResponse = {
  success: boolean;
  message: string;
  data: Blog[];
  meta: BlogResponseMeta;
};
