import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { selectFilter, setFilter } from "../redux/filter/filterSlice";
import { getListings } from "../redux/listings/listingService";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user } = useSelector((state) => state.user);
  const filter = useSelector(selectFilter);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setOpenMenu(false);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.pathname !== "/listings") {
      navigate("listings");
      return;
    }
    dispatch(getListings()).unwrap();
  };

  return (
    <header
      className="bg-slate-200 shadow-lg sticky top-0"
      style={{ zIndex: 100 }}
    >
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-6 sm:h-9 cursor-pointer"
              alt="NextGen Logo"
              onClick={() => navigate("/")}
            />
            <span
              className="self-center text-xl font-semibold whitespace-nowrap text-slate-500 font-serif cursor-pointer"
              onClick={() => navigate("/")}
            >
              NextGen<span className="text-slate-700">Estate</span>
            </span>
          </div>
          <div className="hidden md:block">
            <form
              className="bg-slate-100 p-3 rounded-lg flex items-center"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                placeholder="search by cities, description..."
                className="bg-transparent focus:outline-none w-24 sm:w-64"
                name="searchText"
                value={filter.searchText}
                autoComplete="off"
                onChange={(e) =>
                  dispatch(setFilter({ searchText: e.target.value }))
                }
              />
              <button type="submit">
                <FaSearch className="text-slate-600 cursor-pointer" />
              </button>
            </form>
          </div>
          <div
            className="md:hidden w-8 h-8 cursor-pointer text-slate-900 hover:opacity-90"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <IoMenu
              className={`w-[100%] h-[100%] ${
                openMenu ? "hidden" : "inline-block"
              }`}
            />
            <IoClose
              className={`w-[100%] h-[100%] ${
                openMenu ? "inline-block" : "hidden"
              }`}
            />
          </div>
          <div
            className={`justify-between items-center w-full md:flex md:w-auto md:order-1 ${
              !openMenu ? "hidden" : "inline-block"
            }`}
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 md:bg-transparent md:text-primary-700 md:p-0 dark:text-white hover:text-slate-500 underline-offset-4"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/listings/add"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-slate-500 underline-offset-4 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Add Property
                </Link>
              </li>
              <li>
                {user?.username ? (
                  <Link
                    to="/profile"
                    className=" outline-none block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-slate-500 underline-offset-4 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Profile
                  </Link>
                ) : (
                  <Link
                    to="/sign-in"
                    className="outline-none block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-slate-500 underline-offset-4 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    state={{ from: location }}
                  >
                    Sign In
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
