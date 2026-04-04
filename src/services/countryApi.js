import toast from "react-hot-toast";
import api from "../lib/axios";

export const getAllCountries = async () => {
  try {
    const res = await api.get("/all?fields=name,capital,population,region");
    return res.data;
  } catch (error) {
    toast.error("Failed to fetch countries");
    return [];
  }
};

export const getCountryByName = async (name) => {
  try {
    const res = await api.get(`/name/${name}?fullText=true`);
    return res.data;
  } catch (error) {
    toast.error("Failed to fetch country");
    return null;
  }
};
