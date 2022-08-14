import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../product/productList";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
