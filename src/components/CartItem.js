import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

export const CartItem = ({ product,handleRemoveFromCart}) => {
   
    const dispatch =useDispatch()
  
  return (
    <>
    
    <div  className="flex gap-2 border border-gray-200 rounded-lg shadow mb-2">
      <div
        id="card"
        className=""
      >
        <div id="card-content " className="p-2 gap-3 flex items-center">
          <img className="w-40" src={product.img_url} alt="product" />
          <span className="text-lg ">{product.title}</span>
          <span className="text-lg font-bold">, Price: ${product.price} </span>
          <button
            type="button"
            onClick={() => dispatch(remove(product))}
            className=" border-2 border-orange-600 bg-orange-600 hover:bg-orange-600/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2"
          >
            Remove
          </button>
        </div>
      </div>
      </div>
    </>
  );
};
