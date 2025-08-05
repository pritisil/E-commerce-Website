import axios from "./api/axiosInstance";

const login = async (email, password) => {
  const { data } = await axios.post("/auth/login", { email, password });
  return data;
};

const register = async (userInfo) => {
  const { data } = await axios.post("/auth/register", userInfo);
  return data;
};

const logout = () => {
  localStorage.removeItem("token");
};

export const authService = {
  login,
  register,
  logout,
};
