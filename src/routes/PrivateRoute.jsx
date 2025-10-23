import { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-[500px] flex justify-center items-center">
        <h2 className="text-4xl font-bold text-red-500">Loading...</h2>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/auth/sign-in" />;
};

export default PrivateRoute;
