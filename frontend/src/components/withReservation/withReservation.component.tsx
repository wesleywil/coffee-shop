import { useEffect, ComponentType } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";

function WithReservation<T>(Component: ComponentType, hocProps?: any) {
  const today_reservation = useSelector(
    (state: RootState) => state.reservations.today_reservation
  );

  useEffect(() => {
    console.log("With Reservation Effect!", today_reservation);
  }, [today_reservation]);

  if (Object.keys(today_reservation).length !== 0) {
    return <Component {...hocProps} />;
  } else {
    return <Navigate to="/" replace={true} />;
  }
}

export default WithReservation;
