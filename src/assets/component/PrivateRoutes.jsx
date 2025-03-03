import { Navigate, Outlet } from "react-router-dom";
import { useProfile } from "../contextAPI/ProfileContext";

const PrivateRoute = () => {
  const { user, loading } = useProfile();

  if (loading) {
    return <div>Loading...</div>; // Show a loader while checking auth status
  }

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
