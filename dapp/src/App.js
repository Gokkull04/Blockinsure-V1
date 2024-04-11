import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/client/Home";
import Policy from "../src/pages/client/Policy";
import Claim from "../src/pages/client/Claim";

import AdminHome from "../src/pages/admin/AdminHome";
import Transaction from "../src/pages/admin/Transaction";

function App() {
  return (
    <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/claim" element={<Claim />} />

              <Route path="/admin" element={<AdminHome />} />
              <Route path="/transaction" element={<Transaction />} />
            </Routes>
     </Router>

  );
}

export default App;