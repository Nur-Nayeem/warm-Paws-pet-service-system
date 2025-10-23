import { createBrowserRouter } from "react-router";
import Layoute from "../Layoutes/Layoute";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <h1>Services</h1>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Layoute />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/*",
    element: <h1>404 Not Found</h1>,
  },
]);
