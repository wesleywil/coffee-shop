import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import { fetchReservations } from "../../../redux/reservations/reservations";

import ReservationItem from "../../components/reservation_item/reservation_item.component";

const Reservations = () => {
  const reservations = useSelector(
    (state: RootState) => state.reservations.reservations
  );
  const status = useSelector((state: RootState) => state.reservations.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Manage Reservations");
    if (status === "idle") {
      dispatch(fetchReservations());
    }
  }, [status, reservations]);
  return (
    <div className="mx-1 flex flex-col items-center text-[#F3EFE6]">
      <h1 className="mt-2 text-3xl text-center">Manage Reservations</h1>
      <div className="w-full mt-2 py-2 text-xl">
        {reservations.length
          ? reservations
              .filter((item) => item.status === "pending")
              .map((item) => <ReservationItem key={item.id} item={item} />)
          : "No reservations to be approved"}
      </div>
    </div>
  );
};

export default Reservations;
