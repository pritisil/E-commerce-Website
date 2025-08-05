import HomePage from "../pages/Home/HomePage";
// import LoginPage from "../pages/Auth/LoginPage";
// import DashboardPage from "../pages/Dashboard/DashboardPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";


export const publicRoutes = [
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
  {
    path: "/",
    element: <HomePage />,
  },
];

export const privateRoutes = [
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
];
