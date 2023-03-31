import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { getOrderById } from "../../../redux/orders/order";
import { switch_order_hidden } from "../../../redux/utils/utils";

type OrderCardProps = {
  id: number;
  created_at: string;
  status: string;
  total: number;
};

const OrderCard = ({ id, created_at, status, total }: OrderCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOrderDetails = () => {
    dispatch(getOrderById(id));
    dispatch(switch_order_hidden());
  };

  return (
    <div className="p-2 flex flex-col text-xl text-[#F3EFE6] border-2 border-[#D87D4A] rounded-xl ">
      <div className="text-xs flex flex-col items-center">
        <h1>Order Made At</h1>
        <h2>{created_at?.slice(11, 19)}</h2>
      </div>
      <h1 className="text-center text-base font-bold px-2 border-b">
        {status}
      </h1>
      <h1 className="mt-2 text-sm">Total</h1>
      <h1 className="text-2xl font-bold">${total}</h1>
      <button
        onClick={() => handleOrderDetails()}
        className="mt-2 p-1 bg-[#D87D4A] hover:bg-[#F3EFE6] text-[#F3EFE6] hover:text-[#70351B] font-bold rounded"
      >
        Details
      </button>
    </div>
  );
};

export default OrderCard;
