import { Navigate, Outlet } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
// import { useAuth } from '../hooks/useAuth';

const PublicRoute = () => {
  //   const { isAuthenticated } = useAuth();
  const isAuthenticated = false;

  // return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  );
};

export default PublicRoute;
