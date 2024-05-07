import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContex'

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate()
  const [menu, setMenu] = useState("")
  const [showDropDown, setShowDropDown] = useState(false)

  const logOut = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }
  
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const active = "pb-2, border-b-2 border-[#49557e]"

  return (
    <nav className='py-3 pt-5 px-0 flex justify-between items-center'>

      <Link to={"/"}> <img src={assets.ounjeEko} alt="" className='w-28 sm:w-40' /></Link>
     

      <ul className='hidden md:flex gap-[20px] text-primary-100 text-[18px]'>
        <li
          className={`${menu === "home" ? active : ""} cursor-pointer`}
          onMouseOver={() => setMenu("home")}
        >Home</li>
        <li
          className={`${menu === "menu" ? active : ""} cursor-pointer`}
          onMouseOver={() => setMenu("menu")}
        >Menu</li>
        <li
          className={`${menu === "mobile-app" ? active : ""}  cursor-pointer`}
          onMouseOver={() => setMenu("mobile-app")}
        >Mobile-app</li>
        <li
          className={`${menu === "contact-us" ? active : ""} cursor-pointer`}
          onMouseOver={() => setMenu("contact-us")}
        >Contact Us</li>
      </ul>

      <div className='flex items-center gap-5 sm:gap-10'>
        <img src={assets.search_icon} alt=""  className='w-5 h-5' />
        <div className='relative'>
         <Link to={"/cart"} href=""> <img src={assets.basket_icon} alt="" className='w-5 h-5' /></Link>
          <div className={`${getTotalCartAmount() === 0 ?"hidden":""} absolute bg-tomato min-w-[10px] min-h-[10px] rounded-full -top-3 right-[-8px]`}></div>
        </div>
        {!token
          ? (
            <button
              onClick={() => setShowLogin(true)}
              className='bg-transparent text-[16px] text-primary-100 border-2 border-tomato px-[7px] sm:py-1 sm:px-[30px] rounded-full transition duration-500 hover:bg-[#fff4f2]'>Sign in</button>
          ) : (
            <div className='relative'>
              <img
                src={assets.profile_icon}
                alt=""
                onMouseOver={() => setShowDropDown(true)}
                onMouseOut={() => setShowDropDown(false)}
              />
              <ul
                className={showDropDown ? ("flex flex-col gap-1 py-2 px-1 absolute right-0 w-28 z-10 border-2 border-tomato bg-[#6b73e66c]") : ('hidden ')}
                onMouseOver={() => setShowDropDown(true)}
                onMouseOut={() => setShowDropDown(false)}
              >
                <li className='flex items-center cursor-pointer gap-2'>
                  <img src={assets.bag_icon} alt=""  className='w-6'/>
                  <p className='hover:text-tomato font-extrabold'>Orders</p>
                </li>
                <hr />
                <li onClick={logOut} className='flex items-center cursor-pointer gap-2'>
                  <img src={assets.logout_icon} alt="" className='w-6' />
                  <p className='hover:text-tomato font-extrabold'>Logout</p>
                </li>
              </ul>
            </div>
          )}
      </div>
    </nav>
  )
}

export default Navbar