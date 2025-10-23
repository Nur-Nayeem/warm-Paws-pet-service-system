import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Router.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import EmailFieldValueProvider from "./Context/EmailFieldValueProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmailFieldValueProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </EmailFieldValueProvider>
  </StrictMode>
);
