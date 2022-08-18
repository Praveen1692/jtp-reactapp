import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";


import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
