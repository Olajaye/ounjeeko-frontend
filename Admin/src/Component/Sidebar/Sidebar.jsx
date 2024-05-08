import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from "react-router-dom"

const Sidebar = () => {

  const navlinkStyle = ({ isActive, isPending }) =>
  [
    isPending ? "pending" : "flex items-center gap-3 border border-[#a9a9a9] border-e-0 py-2 px-3 cursor-pointer rounded-s-lg",
    isActive ? "bg-[#464daf6c] border-tomato" : "",
  ].join(" ")
  return (
    <section className='w-[18%] min-h-[100vh] border border-[#a9a9a9] border-t-0'>
      <div className='pt-5 ps-[20%] flex flex-col gap-5'>
        <NavLink
          to={"/add"}
          className={navlinkStyle}
        >
          <img src={assets.add_icon} alt="" />
          <p className='hidden sm:block'>Add items</p> 
        </NavLink>
            
        <NavLink
          to={"/list"}
          className={navlinkStyle}
        >
          <img src={assets.order_icon} alt="" />
          <p className='hidden sm:block'>List items</p>
        </NavLink>

        {/* <NavLink
          to={"/orders"}
          className={navlinkStyle}>
          <img src={assets.order_icon} alt="" />
          <p className='hidden sm:block'>Orders items</p>
        </NavLink> */}
      </div>
    </section>
  )
}

export default Sidebar