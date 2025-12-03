import { createBrowserRouter, Navigate } from "react-router";
import Layoute from "../Layoutes/Layoute";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import ForgetPassword from "../pages/ForgetPassword";
import Services from "../pages/Services";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

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
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
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
        index: true,
        element: <Navigate to="sign-in" />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
