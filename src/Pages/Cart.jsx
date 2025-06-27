import React from 'react'
import {useCart} from "./CartContext"

const Cart = () => {
  const {cart} = useCart();
  
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in Cart</p>
      ): (
        cart.map((item) =>(
          <div key={item.id} className='flex justify-between border-b py-2'>
            <span>{item.title}</span>
            <span> Qty: {item.quantity}</span>
            <span>{item.price * item.quantity}</span>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart
