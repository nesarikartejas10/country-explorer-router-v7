import { getCountryByName } from "../services/countryApi";

export const countryLoader = async ({ params }) => {
  return getCountryByName(params.countryName);
};
