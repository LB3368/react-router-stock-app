import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = "./axios";

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

const Axios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosWithToken = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Token ${token}` },
  });
  return { axiosWithToken };
};

export default Axios;