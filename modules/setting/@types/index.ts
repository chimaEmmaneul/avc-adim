export type updatedPassword = {
  old_password: string;
  password: string;
  password_confirmation: string;
};

export interface Country {
  id: number;
  code: string;
  name: string;
  currency_code: string;
  flag: string;
  continent: string;
}

export interface Meta {
  current_page: number;
  total: number;
  per_page: number;
  last_page: number;
}

export interface CountriesResponse {
  success: boolean;
  message: string;
  data: Country[];
  meta: Meta;
}

export interface CountryDetailsResponse {
  success: boolean;
  message: string;
  data: Country;
}


export interface Currency {
  id: number;
  name: string;
  code: string;
  exchange_rate: number;
}

export interface Meta {
  current_page: number;
  total: number;
  per_page: number;
  last_page: number;
}

export interface CurrencyResponse {
  success: boolean;
  message: string;
  data: Currency[];
  meta: Meta;
}

