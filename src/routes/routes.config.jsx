import HomePage from "../pages/Home/HomePage";
// import LoginPage from "../pages/Auth/LoginPage";
// import DashboardPage from "../pages/Dashboard/DashboardPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import SignUp from "../pages/Auth_Pages/SignUp";
import Login from "../pages/Auth_Pages/Login";


export const publicRoutes = [
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <Login />
  },
];

export const privateRoutes = [
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
];
