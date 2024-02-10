import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import cart_icon from "../assets/cart_icon.svg";
import { useSelector } from "react-redux";

export const Header = () => {
  // const activeClass="`p-2 rounded-md hover:bg-slate-200 border border-b-2 ${isActive ? "border-b-red-600":"""

  const {cartList} = useSelector(state=>state.cartState)

  return (
    <header>
      <div className="flex justify-between items-center mx-5 px-4 py-6 border-b border-slate-500">
        <div className="flex space-x-1 justify-center items-center">
          <img src={logo} className="h-12" alt="e-commerce Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowra text-slate-900">
            Movies Point
          </span>
        </div>

        <div className="flex gap-4">
          <NavLink
            className={({ isActive }) =>
              `p-2 rounded-md hover:bg-slate-200  ${
                isActive ? "border-b-2 border-b-orange-600" : ""
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `p-2 rounded-md hover:bg-slate-200  ${
                isActive ? "border-b-2 border-b-orange-600" : ""
              }`
            }
            to="Cart/"
          >
            
            Cart
          </NavLink>
        </div>
        <div className="ml-4 p-2 border-l-2  rounded-full border-l-slate-900 bg-orange-100">
          <div className="flex space-x-1">
            <img  src={cart_icon} className="h-6" alt="e-commerce Logo" />
            <span>Cart: {cartList.length}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
