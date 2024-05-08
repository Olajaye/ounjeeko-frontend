import React, { useContext} from 'react'
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import { StoreContext } from '../../Context/StoreContex'


const FoodItems = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)


  
  
  


  
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className='w-[100%] m-auto rounded-2xl'
      style={{boxShadow: "0px 0px 10px #00000015", transition: "0.3"}}
    >
      <div className='relative'>
        <img src={image} alt={name} className='w-[100%] h-60 rounded-2xl' />
        {/* Adding and removing Cart Itmes */}
        {!cartItems[id] ?
          <img src={assets.add_icon_white} onClick={() => addToCart(id)} alt='' className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-full' /> : <div className='flex items-center gap-2 p-1 absolute bottom-4 right-4 rounded-full bg-white'>
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" className='w-8' />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""  className='w-8'/>
          </div>
        }
      </div>
      <div className='p-5'>
        <div className='flex justify-between items-center mb-3'>
          <p className='text-xl font-medium'>{name}</p>
          <img src={assets.rating_starts} alt="rating" className='w-16'/>
        </div>
        <p className='text-[#676767] text-sm'>{description}</p>
        <p className='text-tomato text-xl font-medium my-2'>{price} ₦</p>
      </div>
    </motion.div>
  )
}

export default FoodItems