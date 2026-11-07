import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParkingLotManager from "../ParkingLotManager";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ParkingLotManager />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
