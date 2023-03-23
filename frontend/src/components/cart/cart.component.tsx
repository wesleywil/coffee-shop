import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  set_cart_total,
  add_quantity,
  sub_quantity,
} from "../../redux/cart/cart";

const Cart = () => {
  const cart_items = useSelector(
    (state: RootState) => state.cart.cart_products
  );
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    console.log("Setting total of cart");
    let sum: number = 0.0;
    cart_items.forEach((item) => {
      sum += +item.product.price * item.quantity;
    });
    dispatch(set_cart_total(sum));
  }, [cart_items]);
  return (
    <div className="w-48 absolute mt-2 p-2 right-20 md:right-10 bg-[#331508]/70 backdrop-blur-sm z-20 rounded">
      <div className="flex flex-col items-center text-center text-[#F3EFE6]">
        <h1 className="text-xl font-bold">Product Order</h1>
        <div className="w-full flex flex-col border-y-2 py-1">
          {cart_items.length
            ? cart_items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex justify-between mb-2"
                >
                  <span className="self-center font-bold">
                    ${item.product.price}
                  </span>
                  <div className="w-24 flex justify-between">
                    <button
                      onClick={() => dispatch(sub_quantity(item.product.id))}
                      className="p-1 bg-[#D87D4A] hover:bg-[#F3EFE6] text-[#F3EFE6] hover:text-[#70351B]font-bold rounded"
                    >
                      <FaMinus />
                    </button>
                    <span className="p-1">{item.quantity}</span>

                    <button
                      onClick={() => dispatch(add_quantity(item.product.id))}
                      className="p-1 bg-[#D87D4A] hover:bg-[#F3EFE6] text-[#F3EFE6] hover:text-[#70351B] font-bold rounded"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              ))
            : "No items"}
        </div>
        <h2 className="text-xl font-semibold">Total - ${total.toFixed(2)}</h2>
        <button className="w-full bg-[#D87D4A] hover:bg-[#F3EFE6] text-[#F3EFE6] hover:text-[#70351B] font-bold rounded">
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
