import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div
      style={{fontSize:"max(3vw, 20px)"}}
      className='mx-auto my-auto mt-24 text-center font-medium' id='app-download'>
      <p>For Better Experince Download <br />Tomato App</p>
      <div className='flex justify-center gap-5 items-center mt-10'>
        <img src={assets.play_store} alt="" className='w-32 cursor-pointer hover:scale-105 transition duration-500' />
        <img src={assets.app_store} alt="" className='w-32 cursor-pointer hover:scale-105 transition duration-500' />
      </div>
    </div>
  )
}

export default AppDownload