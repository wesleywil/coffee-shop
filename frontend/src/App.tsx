import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Redux
import { getUserInfo } from "./redux/accounts/accounts";
import { getTodaysReservation } from "./redux/reservations/reservations";

//Pages
import Homepage from "./pages/homepage/homepage";
import Catalog from "./pages/catalog/catalog";
import SignIn from "./pages/signIn/signIn";
import Register from "./pages/register/register";
import Profile from "./client/pages/profile/profile";
import Tables from "./pages/tables/tables";
import Order from "./pages/order/order";
import MyOrders from "./client/pages/my_orders/my_orders";
import Payment from "./pages/payment/payment";

//Components
import Navbar from "./components/navbar/navbar.component";
import WithReservation from "./components/withReservation/withReservation.component";

//Styles
import "./App.css";

function App() {
  const stripePromise = loadStripe(
    "pk_test_51KuIEXF2kW82FaU4ECtARLaKr9qhfEnJbtlfgE1Jod1K41p9lrb3mMqPTjI3Nb4et1h8SDL8vhiF8bIeCsHFFG3d00jYih1pVE"
  );
  const status_user = useSelector((state: RootState) => state.accounts.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Getting User Info");
    if (status_user === "idle") {
      dispatch(getUserInfo());
    }
    try {
      dispatch(getTodaysReservation());
    } catch (error) {
      console.log("ERROR IN TRYING TO GET RESERVATION OF TODAY", error);
    }
  }, []);

  const appearance = {
    variables: {
      colorPrimary: "#0570de",
      colorBackground: "#70351B",
      colorText: "#F3EFE6",
      colorDanger: "#D87D4A",
      fontFamily: "Ideal Sans, system-ui, sans-serif",
      spacingUnit: "2px",
      borderRadius: "4px",
      // See all possible variables below
    },
  };

  return (
    <div className="bg-[#4F2B1D] h-screen min-h-full w-screen overflow-y-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/order" element={WithReservation(Order)} />
          {/* Client Side Pages */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/myorders" element={WithReservation(MyOrders)} />
          {/* Test Page */}
          <Route
            path="/test"
            element={
              <Elements
                stripe={stripePromise}
                options={{
                  mode: "setup",
                  currency: "usd",
                  appearance: appearance,
                }}
              >
                <Payment />
              </Elements>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
