import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/StoreContex'
import axios from 'axios'


const PlaceOrder = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    state:"",
    city: "",
    zipcode: "",
    country: "",
    phone: "",
  })

  const {
    getTotalCartAmount,
    token,
    food_list,
    cartItems,
    url
  } = useContext(StoreContext)

  
  const onChangehandler = (e) => {
    const { name, value } = e.target
    setData(prev=>({...prev, [name]:value}))
  }

 
  const placeOrder = async (e) => {
    e.preventDefault()
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2
    }

    

    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } })
    
    
    console.log(response)
    
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url)
    } else {
      alert(response.data.message)
    }
  }
 
  return (
    <form onSubmit={placeOrder}  className='sm:flex items-start sm:justify-between sm:gap-12 sm:mt-24 mt-5'>
      <div className='w-[100%] max-w-96'>
        <p className='text-3xl font-semibold sm:mb-12 mb-3'>Delivery Informaion</p>
        <div className='flex gap-2'>
          <input
            onChange={onChangehandler}
            value={data.firstName}
            name='firstName'
            required
            type="text"
            placeholder='First Name'
            className='mb-4 w-[100%] p-2 border border-[#c5c5c5] rounded outline-tomato' />
          <input
            onChange={onChangehandler}
            value={data.lastName}
            name='lastName'
            required
            type="text"
            placeholder='Last Name'
            className='mb-4 w-[100%] p-2 border border-[#c5c5c5] rounded outline-tomato' />
        </div>

        <input
          onChange={onChangehandler}
          value={data.email}
          name='email'
          required
          type="email"
          placeholder='Email'
          className='mb-4 w-[100%] p-2 border border-[#c5c5c5] rounded outline-tomato'
        />
        

        <input
          onChange={onChangehandler}
          value={data.street}
          name='street'
          required
          type="text"
          placeholder='Street'
          className='mb-4 w-[100%] p-2 border border-[#c5c5c5] rounded outline-tomato'
        />

        <div className='flex gap-2'>
          <input
            onChange={onChangehandler}
            value={data.city}
            name='city'
            required
            type="text"
            placeholder='City'
            className='mb-4 w-[100%] p-2 border border-[#c5c5c5] rounded outline-tomato'
          />

          <input
            onChange={onChangehandler}
            value={data.state}
            name='state'
            required
            type="text"
            placeholder='State'
            className='mb-4 w-[100%] p-2 border border-[#c5c5c5] rounded outline-tomato' />
        </div>
        <div >
          <input
            onChange={onChangehandler}
            value={data.zipcode}
            name='zipcode'
            required
            type="text"
            placeholder='Zip code'
            className='mb-4 w-[100%] p-2 border border-[#c5c5c5] rounded outline-tomato'
          />


          <input
            onChange={onChangehandler}
            value={data.country}
            name='country'
            required
            type="text" placeholder='Country' className='mb-4 w-[100%] p-2 border border-[#c5c5c5] rounded outline-tomato' />
        </div>

        <input
          onChange={onChangehandler}
          value={data.phone}
          name='phone'
          required
          type="text"
          placeholder='Phone'
          className='mb-4 w-[100%] p-2 border border-[#c5c5c5] rounded outline-tomato'
        />
      </div>


      
      <div className='w-[100%] max-w-96 mt-6 sm:mt-0'>
        <div className='flex-1 flex flex-col gap-4'>
          <h2 className='text-3xl font-semibold sm:mb-12 mb-3'>Cart Totals</h2>
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
          <button
            type='submit'
            className='border-none bg-tomato text-white w-52 py-2 rounded-md cursor-pointer mt-7'>Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder