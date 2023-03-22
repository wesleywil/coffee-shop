import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { FaCoffee, FaShoppingCart } from "react-icons/fa";

import { switch_hidden } from "../../redux/cart/cart";

import Cart from "../cart/cart.component";

const Navbar = () => {
  const hidden = useSelector((state: RootState) => state.cart.hidden);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <nav className="bg-[#F3EFE6] shadow shadow-[#D87D4A] w-100 px-8 md:px-auto">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-[#D87D4A] md:order-1">
          <div className="text-4xl">
            <FaCoffee />
          </div>
        </div>
        <div className="text-[#70351B] order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 hover:text-[#D87D4A]">
              <Link to="/">Home</Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-[#D87D4A]">
              <Link to="/catalog">Catalog</Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-[#D87D4A]">
              <Link to="/tables">Tables</Link>
            </li>
          </ul>
        </div>
        <div className="order-2 md:order-3 flex gap-2">
          <button className="px-4 py-2 bg-[#D87D4A] hover:bg-[#70351B] text-gray-50 rounded-xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <Link to="/login">Login</Link>
          </button>
          <button
            onClick={() => dispatch(switch_hidden())}
            className="px-4 py-2 bg-[#D87D4A] hover:bg-[#70351B] text-gray-50 rounded-xl flex items-center gap-2"
          >
            <span>
              <FaShoppingCart />
            </span>
          </button>
        </div>
      </div>
      {hidden ? "" : <Cart />}
    </nav>
  );
};

export default Navbar;
