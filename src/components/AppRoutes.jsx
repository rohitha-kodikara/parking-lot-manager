import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParkingLotManager from "./ParkingLotManager";
import { ParkingProvider } from "./context/ParkingProvider";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ParkingProvider>
        <Routes>
          <Route path="/" element={<ParkingLotManager />} />
        </Routes>
      </ParkingProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
