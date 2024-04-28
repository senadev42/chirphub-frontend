import Axios from "axios";

let baseUrl;

if (import.meta.env.MODE === "production") {
  baseUrl = import.meta.env.VITE_PROD_API_URL;
} else {
  baseUrl = import.meta.env.VITE_DEV_API_URL;
}

const api_axios = Axios.create({
  baseURL: baseUrl,
});

export default api_axios;
