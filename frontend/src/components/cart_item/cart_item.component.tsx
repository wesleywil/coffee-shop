import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { FaPlus, FaMinus } from "react-icons/fa";
import { add_quantity, sub_quantity } from "../../redux/cart/cart";

const CartItem = () => {
  const cart_items = useSelector(
    (state: RootState) => state.cart.cart_products
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="w-full flex flex-col border-y-2 py-1">
      {cart_items.length
        ? cart_items.map((item) => (
            <div key={item.product.id} className="flex justify-between mb-2">
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
  );
};

export default CartItem;
