import { useEffect, useState } from "react";
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
              alt="Plateau Konnect Logo"
              onClick={() => navigate("/")}
            />
            <span
              className="self-center text-xl font-semibold whitespace-nowrap text-black-500 font-serif cursor-pointer"
              onClick={() => navigate("/")}
            >
              Plateau<span className="text-blue-700">Konnect</span>
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
                <FaSearch className="text-black cursor-pointer" />
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
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 gap-4">
              <li>
                <Link
                  to="/"
                  className="outline-none border-b-transparent block font-medium text-black hover:text-slate-500 text-lg border-b-2 hover:border-b-slate-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/listings/add"
                  className="outline-none border-b-transparent block font-medium text-black hover:text-slate-500 text-lg border-b-2 hover:border-b-slate-500"
                >
                  Add Property
                </Link>
              </li>
              <li>
                {user?.username ? (
                  <Link
                    to="/profile"
                    className=" outline-none border-b-transparent block font-medium text-black hover:text-slate-500 text-lg border-b-2 hover:border-b-slate-500"
                  >
                    Profile
                  </Link>
                ) : (
                  <Link
                    to="/sign-in"
                    className="outline-none border-b-transparent block font-medium text-black hover:text-slate-500 text-lg border-b-2 hover:border-b-slate-500"
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
