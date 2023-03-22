import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const Cart = () => {
  const cart_items = useSelector(
    (state: RootState) => state.cart.cart_products
  );
  return (
    <div className="w-48 absolute mt-2 p-2 right-20 md:right-10 bg-[#331508]/70 backdrop-blur-sm z-20 rounded">
      <div className="flex flex-col items-center text-center text-[#F3EFE6]">
        <h1 className="text-xl font-bold">Product Order</h1>
        <div className="w-full flex flex-col border-y-2 py-1">
          {cart_items.length
            ? cart_items.map((item) => <span>${item.product.price} - x1</span>)
            : "No items"}
          {/* <span>$10.00 - x1</span>
          <span>$8.50 - x2</span> */}
        </div>
        <h2 className="text-xl font-semibold">Total - $20.00</h2>
        <button className="w-full bg-[#D87D4A] hover:bg-[#F3EFE6] text-[#F3EFE6] hover:text-[#70351B] font-bold rounded">
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
