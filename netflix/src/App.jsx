import React from "react";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Player from "./components/pages/Player/Player";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
