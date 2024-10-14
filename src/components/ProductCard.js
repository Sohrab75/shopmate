/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartList } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  const { id, name, price, image } = product;
  useEffect(() => {
    const productsInCart = cartList.find((item) => item.id === id);
    if (productsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);
  
  return (
    <div className="flex justify-between flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-72 h-48 object-cover"
          src={image}
          alt={name}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >
            {name}
          </h5>
        </a>
        <div className="flex justify-between items-center">
          {isInCart ? (
            <button
              type="button"
              onClick={() => removeFromCart(product)}
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Remove
            </button>
          ) : (
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add To Cart
            </button>
          )}

          <span className="text-sm font-medium text-gray-900 dark:text-white">
            ${price}.00
          </span>
        </div>
      </div>
    </div>
  );
};
