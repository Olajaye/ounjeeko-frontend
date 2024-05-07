import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Sidebar from './Component/Sidebar/Sidebar'
import {Routes, Route} from "react-router-dom"
import AddProduct from './Pages/AddProduct/AddProduct'
import ListProduct from './Pages/ListProduct/ListProduct'
import Order from './Pages/Orders/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const url = "https://foodbank.onrender.com";
  return (
    <div >
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className='flex'>
        <Sidebar />
        <div className='w-full'>
          <Routes>
            <Route path='/add' element={<AddProduct  url={url}/>} />
            <Route path='/list' element={<ListProduct  url={url}/>} />
            <Route path='/orders' element={<Order url={url}/>}/>
          </Routes>
        </div>
      </div>


    </div>
  )
}

export default App