import React from "react";
import { CartItem } from "../components/Index";
import { useSelector } from "react-redux";

export const Cart = ({ cartitems, handleRemoveFromCart }) => {
  // access state value from store via useSelector hook provided by react-redux

  const {cartList:products,totalPrice} = useSelector((state) => state.cartState);

  return (
    <main>
      <>
      <h1 className="text-xl text-center mb-4"> <span className="mr-4"><strong >Total:</strong></span>{totalPrice} </h1>
        {products &&
          products.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
      </>
    </main>
  );
};
