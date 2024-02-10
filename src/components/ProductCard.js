import React, { useEffect, useState } from "react";
import { add, remove } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const ProductCard = ({ product, handleAddToCart }) => {
  // get despatch function from store via redux hook
  // only using dispatch function you can trigger specific action on state
  const [isInCartList, setIsInCartList] = useState(false);
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cartState);

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);
    productInCart ? setIsInCartList(true) : setIsInCartList(false);
  }, [cartList, product.id]);

  return (
    <div
      id="card"
      className="flex flex-col max-w-sm border border-gray-200 rounded-lg shadow"
    >
      <div id="card-content" className="p-2">
        <img
          className="rounded overflow-hidden"
          src={product.img_url}
          alt="product "
        />
        <span className="text-lg font-bold">{product.title}</span>
        <p>Description lorem </p>
      </div>
      <div id="card-footer" className="flex justify-between mx-2 my-3">
        <span className=" text-lg font-bold"> ${product.price} </span>
        {isInCartList ? (
          <button
            type="button"
            // onClick={()=>handleAddToCart(product)}
            // trigger action defined in redux store

            onClick={() => dispatch(remove(product))}
            className=" border-2 border-orange-600 bg-red-600 hover:bg-orange-600/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2"
          >
            Remove From Cart
          </button>
        ) : (
          <button
            type="button"
            // onClick={()=>handleAddToCart(product)}
            // trigger action defined in redux store
            
            onClick={() => dispatch(add(product))}
            className=" border-2 border-orange-600 bg-orange-600 hover:bg-orange-600/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};
