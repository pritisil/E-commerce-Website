import { Navigate, Outlet } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
// import { useAuth } from "../hooks/useAuth";

const PrivateRoute = () => {
  //   const { isAuthenticated } = useAuth();
  const isAuthenticated = false;

  return isAuthenticated ? (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
