import toast from "react-hot-toast";
import api from "../lib/axios";

export const getAllCountries = async () => {
  try {
    const res = await api.get("/all?fields=name,flags");
    return res.data;
  } catch (error) {
    toast.error("Failed to fetch countries");
    return [];
  }
};
