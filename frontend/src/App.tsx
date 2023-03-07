import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Homepage from "./pages/homepage/homepage";
import Catalog from "./pages/catalog/catalog";
import SignIn from "./pages/signIn/signIn";

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
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
