import { getAllCountries } from "../services/countryApi";

export const countriesLoader = async () => {
  return await getAllCountries();
};
