import HomePage from "../pages/Home/HomePage";
// import LoginPage from "../pages/Auth/LoginPage";
// import DashboardPage from "../pages/Dashboard/DashboardPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import SignupPage from "../pages/Auth/SignupPage";
import LoginPage from "../pages/Auth/LoginPage";


export const publicRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export const privateRoutes = [
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
];
