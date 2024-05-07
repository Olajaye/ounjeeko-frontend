import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContex'
import FoodItems from '../FoodItem/FoodItems'

const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext)
  
  return (
    <div className='mt-[30px]' id='food-display'>
      <h2
        className='font-semibold'
        style={{fontSize:"max(2vw, 24px)"}}
      >Top dishes near you</h2>

      <div
        className='gap-[30px] gap-y-[50px]'
        style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))"}}
      >
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category ) {
            return (
              <FoodItems
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              />
            )
          }
        }
        )
      }
      </div>
    </div>
  )
}

export default FoodDisplay