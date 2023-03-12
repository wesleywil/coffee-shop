import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Homepage from "./pages/homepage/homepage";
import Catalog from "./pages/catalog/catalog";
import SignIn from "./pages/signIn/signIn";
import Register from "./pages/register/register";

//Components
import Navbar from "./components/navbar/navbar.component";

//Styles
import "./App.css";

function App() {
  return (
    <div className="min-h-full h-screen w-screen">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
