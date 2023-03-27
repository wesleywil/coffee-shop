import { useEffect, ComponentType } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";

function WithReservation(Component: ComponentType, hocProps?: any) {
  const today_reservation = useSelector(
    (state: RootState) => state.reservations.today_reservation
  );
  const status = useSelector(
    (state: RootState) => state.reservations.status_today
  );
  useEffect(() => {
    console.log("With Reservation Effect!", today_reservation);
  }, [today_reservation, status]);

  if (status === "idle") {
    return <h1 className="text-white text-center text-3xl">Loading...</h1>;
  } else {
    if (status === "empty reservation") {
      return <Navigate to="/" replace={true} />;
    }
    return <Component {...hocProps} />;
  }
}

export default WithReservation;
