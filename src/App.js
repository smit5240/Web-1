import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Second from "./components/Second";
import Home from "./components/Home";
import Register from "./components/Register";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="login" element={<Second />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
