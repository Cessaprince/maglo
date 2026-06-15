import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";
import Invoice2 from "./pages/Invoice2";
import Settings1 from "./pages/Settings1";
import Settings2 from "./pages/Settings2";
import Transaction from "./pages/Transaction";
import Wallet from "./pages/Wallet";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>

      
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/dashboard/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="invoice2" element={<Invoice2 />} />
          <Route path="settings1" element={<Settings1 />} />
          <Route path="settings2" element={<Settings2 />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="wallet" element={<Wallet />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;