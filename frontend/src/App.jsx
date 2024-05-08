import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/Placeorder/PlaceOrder'
import Footer from './Component/Footer/Footer'
import LogIn from './Component/LoginPopUp/LogIn'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin && <LogIn setShowLogin={setShowLogin}/>}
      <div className='w-[90%] sm:w-[80%] m-auto'>
        <Navbar setShowLogin={setShowLogin} />
        <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='cart' element={<Cart />} />
        <Route path='order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App