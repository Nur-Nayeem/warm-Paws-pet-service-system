import { createBrowserRouter } from "react-router";
import Layoute from "../Layoutes/Layoute";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

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
        element: <ServiceDetails />,
      },
      {
        path: "/profile",
        element: <h1>Profile</h1>,
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
]);
