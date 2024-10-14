import React from 'react'
import { CartCard } from '../components'
import { useTitle } from '../hooks/useTitle'
import { useCart } from '../context/CartContext'

export const Cart = () => {
  const {total, cartList} = useCart();
  useTitle("Cart");
  console.log(cartList);
  // const products = [
  //   {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
  //   {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
  // ]
  return (
    <div className='flex flex-col gap-4 p-8'>
      <h1>Cart {cartList.length}/ ${total}.00</h1>
      {cartList.map((product, index)=>(
        <CartCard key={index} product={product}/>
      ))}
    </div>
  )
}
