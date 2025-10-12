import axios from "axios";

const api = axios.create({
  baseURL: "https://classroombook-ghfph7eacsh2eecz.centralindia-01.azurewebsites.net",
});

api.interceptors.request.use(cfg => {
  const token = localStorage.getItem("token");
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

export default api;
