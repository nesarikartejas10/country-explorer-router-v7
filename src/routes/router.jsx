import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const Countries = lazy(() => import("../pages/Countries"));
import Country from "../pages/Country";
import About from "../pages/About";
import RootLayout from "../layouts/RootLayout";
import { countriesLoader } from "../loaders/countriesLoader";
import { countryLoader } from "../loaders/countryLoader";

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
        loader: countryLoader,
      },

      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
