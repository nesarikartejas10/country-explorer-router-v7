import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Countries from "../pages/Countries";
import Country from "../pages/Country";
import About from "../pages/About";
import RootLayout from "../layouts/RootLayout";
import { countriesLoader } from "../loaders/countriesLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/countries",
        element: <Countries />,
        loader: countriesLoader,
      },

      {
        path: "/countries/:countryName",
        element: <Country />,
      },

      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
