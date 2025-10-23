import { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/auth/login-in" />;
};

export default PrivateRoute;
