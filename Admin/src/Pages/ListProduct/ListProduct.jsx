import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const ListProduct = ({url}) => {
  
  const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error("Error")
    }
  }
  
  useEffect(() => {
    fetchList()
  }, [])
  
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
    await fetchList()
     if (response.data.success) {
     toast.success(response.data.message)
    } else {
      toast.error("Error")
    }
  }

  const flexCol = "flex flex-col"
  return (
    <div className={`${flexCol}`}>
      <p>All Food List</p>
      <div>

        <div className='hidden sm:grid sm:grid-cols-cart sm:gap-3 py-3 px-4 border-[#cacaca] text-sm bg-[#f9f9f9]'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => {
          return (
            <div key={index} className='grid grid-cols-xscart sm:grid-cols-cart gap-3 py-3 px-4 border-[#cacaca] text-sm'>
              <img src={`${url}/images/`+item.image} alt="" className='w-12 '/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>N {item.price}</p>
              <p
                onClick={()=>removeFood(item._id)}
                className='cursor-pointer'>X</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default ListProduct