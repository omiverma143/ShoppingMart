import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { CartItem } from "../components/Index";

export const Cart = ({ cartitems, handleRemoveFromCart }) => {
  // access state value from store via useSelector hook provided by react-redux

  const { cartList: products, totalPrice } = useSelector(
    (state) => state.cartState
  );
  const routLocation = useLocation();
  
  const getTitleName = (Path) => {
    const segments = Path.split("/");
    return segments;
  };
  const title = "Shop" + getTitleName(routLocation.pathname);

  return (
    <main>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1 className="text-xl text-center mb-4">
        {" "}
        <span className="mr-4">
          <strong>Total:</strong>
        </span>
        {totalPrice}{" "}
      </h1>
      {products &&
        products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
    </main>
  );
};
