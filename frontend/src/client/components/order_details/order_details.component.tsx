import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import { switch_order_hidden } from "../../../redux/utils/utils";
import { FaTimes } from "react-icons/fa";
import OrderDetailsItem from "../order_details_item/order_details_item.component";

const OrderDetails = () => {
  const order = useSelector((state: RootState) => state.orders.selected_order);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("ORDER =>", order);
  }, [order]);
  return (
    <div className="m-2 fixed  inset-0 md:inset-40 z-50 bg-black/40 backdrop-blur-sm text-white overflow-hidden rounded-xl">
      {/* Top Info plus X */}
      <div className="py-1 px-2 bg-[#D87D4A] flex justify-between">
        <h1 className="font-bold">Order Details</h1>
        <div>
          <button
            onClick={() => dispatch(switch_order_hidden())}
            className="bg-[#F3EFE6]  text-[#70351B]/70 hover:text-[#70351B] p-1 rounded-full"
          >
            <FaTimes />
          </button>
        </div>
      </div>
      <div className="h-80 md:h-96 mx-2 mt-12 flex flex-col gap-2 text-xl md:text-2xl overflow-y-auto">
        {order.cart_items?.map((item) => (
          <OrderDetailsItem key={item.product_id} item={item} />
        ))}
      </div>
      <div className="text-2xl">
        <h1>TOTAL = ${order.total}</h1>
        <button className="w-1/2 mx-auto px-4 py-1 bg-[#D87D4A] hover:bg-[#70351B] text-gray-50 font-bold rounded-xl flex justify-center items-center gap-2">
          Pay
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
