import React from 'react'
import { menu_list } from "../../assets/assets"
import './ExploreMenu.css'

const ExploreMenu = ({ category, setCategory }) => {
  
  const active = "border-tomato border-4 "
  return (
    <div className='flex flex-col gap-2 sm:gap-5' id='explore-menu'>
      <h1
        className='text-[#262626] text-lg sm:text-3xl font-medium'
      >Explore our menu</h1>

      <p
        className='text-[#808080] max-w-[100%] md:max-w-[60%]'
      >Choose from a diverse menu featuring a delectable array of dishes. our mission is to satify your cravings and elevate your dining experience, one delicious meal at a time.</p>

      <div className='menu-scroll flex justify-between items-center gap-[30px] text-center my-[20px] mx-0 overflow-x-scroll'>
        {menu_list.map((item, index) => (
          <div
            onClick={()=>setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            className='' key={index}>
            <img
              src={item.menu_image} alt={item.menu_name}
              className={`${category === item.menu_name ? active : ""}w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition duration-200`} />
            <p
              className='mt-[10px] text-button-col cursor-pointer'
              style={{fontSize: 'max(1vw, 16px)'}}
            >{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className='my-[10px] mx-0 h-2 bg-[#e2e2e2] border-none'/>
    </div>
  )
}

export default ExploreMenu