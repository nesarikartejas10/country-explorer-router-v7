import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full px-8 text-gray-700 bg-white shadow-sm fixed top-0">
      <div className="container flex flex-col md:flex-row items-center justify-between py-5 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <NavLink to="/" className="flex items-center mb-5 md:mb-0">
            <span className="text-xl font-black text-gray-900">
              WORLD<span className="text-indigo-600">Explorer</span>
            </span>
          </NavLink>

          <nav className="flex flex-wrap items-center ml-0 md:ml-8 md:border-l md:pl-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `mr-5 font-medium transition-all duration-200 ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/countries"
              className={({ isActive }) =>
                `mr-5 font-medium transition-all duration-200 ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              Countries
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `mr-5 font-medium transition-all duration-200 ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
