import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/signIn/signIn";

//Styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
