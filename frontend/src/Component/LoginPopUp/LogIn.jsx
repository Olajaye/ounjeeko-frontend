import React, {  useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'
import { StoreContext } from '../../Context/StoreContex'
import axios from 'axios'



const LogIn = ({setShowLogin}) => {
  const [currentState, setCurrentState] = useState("Login")
  const [data, setData] = useState({
    name: "",
    email: "",
    password:""
  })

  const {url, setToken} = useContext(StoreContext)

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setData(prev=>({...prev, [name]:value}))
  }

  const onLogin = async (e) => {
    e.preventDefault()
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login"
    }else {
      newUrl += "/api/user/register"
    }

    const  response = await axios.post(newUrl, data)
    
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token)
      setShowLogin(false)
    } else {
      alert(response.data.message)
    }
  } 


  return (
    <section className='absolute z-10 w-[100%] h-[100%] bg-[#00000090] grid'>
      <motion.form
        onSubmit={onLogin}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1, transition: {
          duration:2
        }}}
        action=""
        className='place-self-center max-w-[60%] text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 rounded-lg text-sm'
      >

        <div className='flex justify-between items-center text-black'>
          <h2 className='font-bold text-xl'>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className='w-4 cursor-pointer' />
        </div>

        <div className='flex flex-col gap-5'>
          {
            currentState === "Login"
              ? (<></>)
              : (<input
                onChange={onChangeHandler}
                name='name'
                value={data.name}
                type="text"
                placeholder='Your name'
                required
                className='outline-none border-[1px] border-[#c9c9c9] p-1 rounded'
              />)
          }

          <input
            onChange={onChangeHandler}
            name='email'
            value={data.email}
            type="email"
            placeholder='Your email'
            required
            className='outline-none border-[1px] border-[#c9c9c9] p-1 rounded'
          />

          <input
            onChange={onChangeHandler}
            name='password'
            value={data.password}
            type="password"
            placeholder='password'
            required
            className='outline-none border-[1px] border-[#c9c9c9] p-1 rounded'
          />
        </div>

        <button
          type='submit'
          className='border-none p-2 rounded bg-tomato  text-white text-xs cursor-pointer'
        >
          {currentState === "Sign Up"
            ? "Create account"
            : "Login"}
        </button>


        <div className='flex items-start gap-2 -m-4'>
          <input
            type="checkbox"
            
            required
            className='mt-1' />
          <p >By countinuing, i agree to the terms of use & privasy policy.</p>
        </div>


        {currentState === "Login" && <p>Create a new account? <span className='text-tomato font-semibold cursor-pointer' onClick={() => setCurrentState("Sign Up")}> Click here</span></p>}
        

        {currentState === "Sign Up" && <p>Already have an account? <span className='text-tomato font-semibold cursor-pointer' onClick={()=>setCurrentState("Login")}> Login here</span></p>}
      </motion.form>
    </section>
  )
}

export default LogIn