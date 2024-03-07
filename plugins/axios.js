import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  axios.defaults.baseURL = "http://localhost:3003/api";
  // axios.defaults.baseURL = "https://api.biscaminvestmentsarl.com";
});
