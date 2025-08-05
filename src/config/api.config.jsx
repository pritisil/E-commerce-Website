const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const ApiConfig = {
  baseURL: API_BASE,
  auth: {
    login: `${API_BASE}/auth/login`,
    register: `${API_BASE}/auth/register`,
  },
  users: {
    getProfile: `${API_BASE}/users/profile`,
  },
};
