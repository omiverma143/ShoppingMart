import { Route, Routes } from "react-router-dom";
import { Cart, Home } from "../pages";

import React from "react";
import { PageNotFound } from "../components/PageNotFound";

export const AllRoutes = ({products,cartitems,handleAddToCart,handleRemoveFromCart,}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home products={products} handleAddToCart={handleAddToCart} />} />
        <Route path="cart/" element={<Cart cartitems={cartitems} handleRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
