import { createBrowserRouter } from "react-router";
import Layoute from "../Layoutes/Layoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoute />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: "/services",
        element: <h1>Services</h1>,
      },
      {
        path: "/profile",
        element: <h1>Profile</h1>,
      },
    ],
  },
]);
