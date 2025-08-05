import { Navigate, Outlet } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
// import { useAuth } from "../hooks/useAuth";

const PrivateRoute = () => {
  //   const { isAuthenticated } = useAuth();
  const isAuthenticated = true;

  return isAuthenticated ? (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
