import "./header.css"
import { motion } from "framer-motion"
import { fadeIn } from "../../utils/motion"


const Header = () => {
  return (
    <header className="header h-[38vw] mt-4 mb-5 my-0 sm:my-8 mx-auto bg-headerImg" id="home">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute flex flex-col items-start sm:max-w-[50%] max-w-[50%] xs:max-w-[55%] gap-[1.5vw] bottom-[15%] left-[6vw] ">
        
        <h2 className="font-semibold text-white sm:text-4xl text-lg xs:text-2xl md:text-5xl">Order your favorite food here</h2>


        <p className="hidden text-white xs:text-[8px] md:text-lg sm:text-xs sm:block">Choose from a wide range of dishes on the menu that are prepared with the finest ingredients and culinary expertise, as well as a choice of food products. Our mission is to satisfy your cravings and enhance your dining experience, one delicious dish at a time.</p>
        <a href="#explore-menu" className="border-none text-button-col font-medium bg-white sm:py-[1vw] sm:px-[2.3vw] rounded-full text-xs p-1">View Menu</a>
      </motion.div>
    </header>
  )
}

export default Header