const SETTINGSENDPOINTS = {
  GET_COUNTRIES: ({ page, search }: { page: number; search: string }) =>
    `/settings/countries?page=${page}&search=${search}`,
  UPDATE_COUNTRY: (id: string) => `admin/country/update/${id}`,
};

export default SETTINGSENDPOINTS;
