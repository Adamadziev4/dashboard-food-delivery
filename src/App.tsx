import { Routes, Route } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { Order } from "./pages/Order";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
    </div>
  );
}

export default App;
