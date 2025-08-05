export const EnvConfig = {
  isProduction: import.meta.env.MODE === 'production',
  isDevelopment: import.meta.env.MODE === 'development',
  apiKey: import.meta.env.VITE_API_KEY,
};
