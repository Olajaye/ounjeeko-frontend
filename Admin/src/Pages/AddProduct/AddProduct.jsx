import React from 'react'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddProduct = ({ url }) => {
  
  const [image, setImage] = useState(false)

  const [data, setData] = useState({
    name: "",
    description: "", 
    price: "",
    category:"Salad"
  })

  
  const OnChangeHandler = (e) => {
    const { name, value } = e.target
    setData((prev)=>({...prev, [name]: value}))
  }

  const flexCol = "flex flex-col"

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)

    const response = await axios.post(`${url}/api/food/add`, formData)
    if (response.data.success) {
      setData({
        name: "",
        description: "", 
        price: "",
        category:"Salad"
      })
      setImage(false)
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
    
  }


  return (
    <div className='w-[100%] sm:w-[70%] text-[#6d6d6d]'>
      <form onSubmit={onSubmitHandle} className={`${flexCol} mt-10 ms-10 gap-4`}>

        <div className={`${flexCol} gap-2`}>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image? URL.createObjectURL(image):assets.upload_area} alt="" className='max-w-36 max-h-36 object-contain' />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>

        {/* add product name */}
        <div className={`${flexCol} w-[70%] sm:w-[50%]`}>
          <p>Product name</p>
          <input
            onChange={OnChangeHandler}
            value={data.name}
            type="text"
            name="name" id=""
            placeholder='Type here'
            className='p-2 border' />
        </div>

        <div className={`${flexCol} w-[70%] sm:w-[50%]`}>
          <p>Product description</p>
          <textarea
            onChange={OnChangeHandler}
            value={data.description}
            name="description" rows="6" placeholder='Write content here' className='p-2 border'></textarea>
        </div>

        <div className='sm:flex gap-7'>
          <div className={`${flexCol}`}>
            <p>Product category</p>
            <select
              onChange={OnChangeHandler}
              name="category"
              className='w-[120px] p-2 border'>
              <option value="Rice">Rice</option>
              <option value="Garri">Garri</option>
              <option value="Beans">Beans</option>
              <option value="Perishables">Perishables</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Deserts">Deserts</option>
              <option value="Rolls">Rolls</option>
             
            </select>
          </div>

          <div>
            <p>Product price</p>
            <input
              onChange={OnChangeHandler}
              value={data.price}
              type="number" name='price' placeholder='N20' className='w-[120px] p-2 border' />
          </div>
        </div>

        <button className='w-[120px] p-2 border-none bg-black cursor-pointer text-white' type='submit'>Add Product</button>
      </form>

    </div>
  )
}

export default AddProduct