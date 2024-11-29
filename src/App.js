import React from "react";
import './App.css';
import Fullpage from "./components/Fullpage.js";
import { Routes, Route } from "react-router-dom";
import Secpart from "./components/Secpart.js";
// import Navbar from "./components/Navbar.js";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
      <Fullpage />
      <Routes>
        <Route path="/Secpart" element={<Secpart />} />
      </Routes>
    </div>
  );
}

export default App;
