import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Redux
import { getUserInfo } from "./redux/accounts/accounts";

//Pages
import Homepage from "./pages/homepage/homepage";
import Catalog from "./pages/catalog/catalog";
import SignIn from "./pages/signIn/signIn";
import Register from "./pages/register/register";
import Profile from "./client/profile/profile";

//Components
import Navbar from "./components/navbar/navbar.component";

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
  }, []);

  return (
    <div className="min-h-full h-screen w-screen">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog />} />
          {/* Client Side Pages */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
