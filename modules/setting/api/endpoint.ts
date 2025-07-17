const SETTINGSENDPOINTS = {
  GET_COUNTRIES: ({ page, search }: { page: number; search: string }) =>
    `admin/country?page=${page}&search=${search}&per_page=${30}`,
  UPDATE_COUNTRY: (id: string) => `admin/country/update/${id}`,
  GET_COUNTRY_DETAILS: (id: string) => `admin/country/details/${id}`,
  UPDATE_COUNTRY_DETAILS: (id: string) => `admin/country/update/${id}`,
};

export default SETTINGSENDPOINTS;
