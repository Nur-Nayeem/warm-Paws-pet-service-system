import { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/Context";

import { MoonLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-[500px] flex justify-center items-center">
        <h2 className="text-[80px] font-medium text-secondary flex items-center">
          <span>L</span>
          <MoonLoader color="#5f87a6" speedMultiplier={0.7} />
          <span>ADING...</span>
        </h2>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/auth/sign-in" />;
};

export default PrivateRoute;
