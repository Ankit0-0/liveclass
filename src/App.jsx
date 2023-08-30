import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/index.jsx";

import "./App.css";
import RoomPage from "./pages/room/index.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomId" element={<RoomPage/>} />
      </Routes>
    </>
  );
}

export default App;
