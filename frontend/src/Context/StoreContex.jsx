import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import {food_list} from '../assets/assets'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
  const url = "https://foodbank.onrender.com"

  const [cartItems, setCartItems] = useState({})

  const [food_list, setFoodList]=useState([])

  const [token, setToken] = useState("")

  useEffect(() => {
    async function loadData() {
      await fetchFoodList()
      
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"))
     }
    }

    loadData()
  }, [])

 
  const fetchFoodList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    setFoodList(response.data.data)
  }

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev)=>({...prev, [itemId]: 1}))
    } else {
      setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
    }

    if (token) {
      await axios.post(url+"/api/cart/add", {itemId}, {headers: {token}})
    }
    
  }  

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    
    if (token) {
      await axios.post(url+'/api/cart/remove', {itemId}, {headers:{token}})
    }
  }

  const loadCartData = async (token) => {
    const response = await axios.post(`${url}/api/cart/get`, {}, { headers: { token } })
    setCartItems(response.data.cartData)
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0 
    for (const item in cartItems) {

      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item)
        totalAmount += itemInfo.price * cartItems[item]
      }
      
    }
    return totalAmount 
  }

 

  const contextVale = {
    food_list, cartItems, addToCart, removeFromCart, getTotalCartAmount, url,token, setToken
  }

  return (
    <StoreContext.Provider value={contextVale} >
      {children}
    </StoreContext.Provider >
  )
}

export default StoreContextProvider