import axios from "axios";

const serverURL = "https://dummyjson.com";
export const generateClient = () => {
  return axios.create({ baseURL: serverURL });
};
