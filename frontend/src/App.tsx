import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

//Components
import Navbar from "./components/navbar/navbar.component";
import WithReservation from "./components/withReservation/withReservation.component";

//Styles
import "./App.css";

function App() {
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
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
