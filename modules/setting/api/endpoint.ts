const SETTINGSENDPOINTS = {
  GET_COUNTRIES: ({ page, search }: { page: number; search: string }) =>
    `admin/country?page=${page}&search=${search}&per_page=${30}`,
  UPDATE_COUNTRY: (id: string) => `admin/country/update/${id}`,
  GET_COUNTRY_DETAILS: (id: string) => `admin/country/details/${id}`,
  GET_CONVERSION_DETAILS: (id: string) =>
    `admin/conversion-board/details/${id}`,
  UPDATE_CONVERSION_DETAILS: (id: string) =>
    `admin/conversion-board/update/${id}`,
  UPDATE_COUNTRY_DETAILS: (id: string) => `admin/country/update/${id}`,
  GET_POINT_CONVERSION: ({ page, search }: { page: number; search?: string }) =>
    `admin/conversion-board?page=${page}`,
};

export default SETTINGSENDPOINTS;
