import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import Booking from "./pages/Booking.jsx";

const router = createBrowserRouter([
  {
    path: "/trash-removal-services/",
    element: <App />,
    children: [
      {
        path: "/trash-removal-services/",
        element: <LandingPage />,
      },
      {
        path: "/trash-removal-services/booking",
        element: <Booking />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
