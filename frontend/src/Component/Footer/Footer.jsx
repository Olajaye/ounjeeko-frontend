import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {

  const footerFlex = "flex flex-col items-start gap-5" 
  return (
    <footer className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 mt-24' id='footer'>

      <div
        
        className='w-[100%] grid grid-cols-1 sm:grid-cols-footer sm:gap-16'>


        <div className={`${footerFlex} sm:min-w-5`}>
          <img src={assets.ounjeEko} alt="" />
          <p className='sm:max-w-96'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe at, tenetur soluta quisquam sit doloribus consectetur modi magnam doloremque eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sint veniam id placeat quia ab facilis accusantium ducimus sed dignissimos.</p>
          <div className='flex'>
            <img src={assets.facebook_icon} alt="" className='w-10 ms-4 cursor-pointer'/>
            <img src={assets.twitter_icon} alt="" className='w-10 ms-4 cursor-pointer'/>
            <img src={assets.linkedin_icon} alt="" className='w-10 ms-4 cursor-pointer'/>
          </div>
        </div>


        <div className={`${footerFlex} mt-8 sm:mt-0`}>
          <h2 className='text-white'>COMPANY</h2>
          <ul>
            <li className='mb-2 cursor-pointer'>Home</li>
            <li className='mb-2 cursor-pointer'>About Us</li>
            <li className='mb-2 cursor-pointer'>Delivery</li>
            <li className='mb-2 cursor-pointer'>Privacy policy</li>
          </ul>
        </div>


        <div className={`${footerFlex} mt-8 sm:mt-0`}>
          <h1 className='text-white'>GET IN TOUCH</h1>
          <ul>
            <li className='mb-2 cursor-pointer'>08104210878</li>
            <li className='mb-2 cursor-pointer'>jayeolajeremiah@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className='w-[100%] h-[2px] my-5 mx-0 bg-button-col border-none'/>
      <p className='text-center'>Copyright 2024 @ OUNJE EKO.com - All Right Reserved</p>
    </footer>
  )
}

export default Footer