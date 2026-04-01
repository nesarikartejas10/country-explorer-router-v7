import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Suspense } from "react";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <p className="min-h-screen flex justify-center items-center">
            Loading...
          </p>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default RootLayout;
