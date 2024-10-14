import React from 'react'
import { useCart } from '../context/CartContext';

export const CartCard = ({product}) => {
  const {removeFromCart} = useCart();
  const {id, price, name, image} = product;

  return (
    <div className='flex flex-row gap-4 items-center'>
      <img className='w-24 h-20 object-cover' src={image} alt={name} />
      <span className='text-2xl'>{name}</span>
      <span className='text-2xl'>${price}</span>
      <button type="button" 
      onClick={()=>removeFromCart(product)}
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
    </div>
  )
}
