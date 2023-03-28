import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { FaCoffee, FaShoppingCart, FaUserAlt, FaListAlt } from "react-icons/fa";

import { switch_hidden_cart, switch_hidden_menu } from "../../redux/cart/cart";

import Cart from "../cart/cart.component";
import UserMenu from "../user_menu/user_menu.component";

const Navbar = () => {
  const hidden_cart = useSelector((state: RootState) => state.cart.hidden_cart);
  const hidden_menu = useSelector((state: RootState) => state.cart.hidden_menu);
  const user = useSelector((state: RootState) => state.accounts.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("USER ID => ", user);
  }, [user]);
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
          {user ? (
            <button
              onClick={() => dispatch(switch_hidden_menu())}
              className="px-4 py-2 bg-[#D87D4A] hover:bg-[#70351B] text-gray-50 rounded-xl flex items-center gap-2"
            >
              <FaListAlt />
              Menu
            </button>
          ) : (
            <button className="px-4 py-2 bg-[#D87D4A] hover:bg-[#70351B] text-gray-50 rounded-xl flex items-center gap-2">
              <FaUserAlt />
              <Link to="/login">Login</Link>
            </button>
          )}

          <button
            onClick={() => dispatch(switch_hidden_cart())}
            className="px-4 py-2 bg-[#D87D4A] hover:bg-[#70351B] text-gray-50 rounded-xl flex items-center gap-2"
          >
            <span>
              <FaShoppingCart />
            </span>
          </button>
        </div>
      </div>

      {hidden_menu ? "" : <UserMenu />}
      {hidden_cart ? "" : <Cart />}
    </nav>
  );
};

export default Navbar;
