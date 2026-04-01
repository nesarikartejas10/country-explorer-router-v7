import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Countries from "../pages/Countries";
import Country from "../pages/Country";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/countries",
    element: <Countries />,
  },

  {
    path: "/countries/:countryName",
    element: <Country />,
  },

  {
    path: "/about",
    element: <About />,
  },
]);
