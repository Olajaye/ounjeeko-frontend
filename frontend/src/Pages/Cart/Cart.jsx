import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContex'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const navigate = useNavigate()

  const {food_list, cartItems, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)
  return (
    <div className='mt-24'>
      <div>
        <div className='grid grid-cols-cart items-center text-grey text-xs'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr /> 
        {food_list.map((item, index) => {
          if (cartItems[item._id]>0) {
            return (
              <div key={index}>
                <div className='grid grid-cols-cart items-center my-2 text-xs text-black'>
                <img src={url+"/images/"+item.image} alt="" className='w-12 h-12' />
                <p>{item.name}</p>
                <p>{item.price} ₦</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price * cartItems[item._id]} ₦</p>
                <p className='cursor-pointe' onClick={()=>removeFromCart(item._id)}>X</p>
              </div>
              <hr className='h-1 bg-[#e2e2e2e2] border-none'/>
              </div>
              
            )
          }
        })}
      </div>

      <div className='mt-10 flex justify-between gap-5 flex-col-reverse sm:flex-row'>
        <div className='flex-1 flex flex-col gap-4 '>
          <h2>Cart Totals</h2>
          <div >
            <div className='flex justify-between text-[#555]'>
              <p>Subtotal</p>
              <p>₦{getTotalCartAmount()}</p>
            </div>
            <hr className='my-2 mx-0'/>
            <div className='flex justify-between text-[#555]'>
              <p>Delivery</p>
              <p>₦{getTotalCartAmount() === 0 ? 0:2}</p>
            </div>
            <hr className='my-2 mx-0'/>
            <div className='flex justify-between text-[#555]'>
              <b>Total</b>
              <b>₦{getTotalCartAmount() === 0? 0: getTotalCartAmount() + 2}</b>
            </div>
            
          </div>
          <button className='border-none bg-tomato text-white w-52 py-2 rounded-md cursor-pointer' onClick={()=>navigate("/order")}>Proceed To Checkout</button>
        </div>


        <div className='flex-1 mt-5 sm:mt-0'>
          <div>
            <p className='text-[#555]'>If you have a promocode enter it here</p>
            <div className='mt-3 flex justify-between items-center bg-[#eaeaea] rounded'>
              <input type="text" placeholder='Promo code' name="" id="" className='border-none outline-none ps-2 bg-[#eaeaea]' />
              <button className='w-40 p-3 bg-black border-none text-white'> Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart