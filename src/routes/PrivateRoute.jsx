import { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/Context";

import { MoonLoader } from "react-spinners";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/auth/sign-in" />;
};

export default PrivateRoute;
