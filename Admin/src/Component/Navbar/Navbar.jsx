import React from 'react'
import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-1 px-2'>
      <img src={assets.ounjeEko} alt="" className='w-40' />
      {/* <div></div> */}
      <img src={assets.admin} alt="" className='w-16 h-16 rounded-full'/>
    </nav>
  )
}

export default Navbar