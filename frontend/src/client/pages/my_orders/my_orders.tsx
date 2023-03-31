import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import { getAllOrdersByReservationId } from "../../../redux/orders/order";

import OrderCard from "../../components/order_card/order_card.component";
import OrderDetails from "../../components/order_details/order_details.component";

const MyOrders = () => {
  const reservation_id = useSelector(
    (state: RootState) => state.reservations.today_reservation.id
  );
  const myOrders = useSelector((state: RootState) => state.orders.orders);
  const status = useSelector((state: RootState) => state.orders.status);
  const hidden = useSelector(
    (state: RootState) => state.utils.order_details_hidden
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("My Orders", reservation_id);
    if (reservation_id) {
      if (status === "idle") {
        console.log("IDLE?");
        dispatch(getAllOrdersByReservationId(reservation_id));
      }
    }
  }, [status, myOrders, reservation_id]);
  return (
    <div className="mt-24 text-center">
      {hidden ? "" : <OrderDetails />}

      <h1 className="text-2xl text-[#F3EFE6] font-bold text-center mb-2">
        My Orders
      </h1>
      <div className="mt-2 p-4 flex flex-wrap justify-center gap-2">
        {/* My Order Components */}
        {myOrders.length
          ? myOrders.map((item) => (
              <OrderCard
                key={item.id}
                id={item.id!}
                created_at={item.created_at!}
                status={item.status!}
                total={item.total!}
              />
            ))
          : "NO ORDERS"}
      </div>
    </div>
  );
};

export default MyOrders;
