import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddProducts = () => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const onSubmit = (data) =>{
     fetch('http://localhost:5000/products',{
          method:'POST',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data =>{
          console.log(data)
          if (data.insertedId){
              reset()
              Swal.fire({
                  title: 'success!',
                  text: 'Your Items Added In Your Page',
                  icon: 'success',
                  confirmButtonText: 'Finised'
              })
          }
      })
    }
    return (
        <div className='lg:px-20 md:px-12 px-12 py-6'>
           <div className='w-full flex items-center space-x-2 px-4 py-4 bg-[#2a2a2a58] cursor-pointer'>
               <Link to='/'><p className='hover:text-[red] duration-300'>Home</p></Link>
               <p>/</p>
               <p>Add Products</p>
           </div>
           
           <div className='lg:px-12 px-6 bg-white py-8 mt-12 border rounded'>
           <h2 className="text-center text-2xl font-medium">Add Single Product</h2>
             <div className='py-4 mt-4'>
                  <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                      <div className='w-full'>
                           <input
                           {...register("title", { required: true })}
                            className='border px-4 py-2 w-full outline-none' type="text" placeholder='Enter Title' />
                            {errors.title && <span className='text-[red] py-1'>this filed can't be emty</span>}
                      </div>

                      <div className='w-full lg:flex lg:space-x-2 lg:space-y-0 space-y-2 items-center'>
                           <input
                           {...register("price", { required: true })}
                            className='border px-4 py-2 w-full outline-none' type="text" placeholder='Enter Price' />
                            {errors.price && <span className='text-[red] py-1'>price</span>}

                           <input
                           {...register("rating", { required: true })}
                            className='border px-4 py-2 w-full outline-none' type="text" placeholder='Enter Rating 1-5' />
                            {errors.rating && <span className='text-[red] py-1'>rating</span>}
                      </div>

                      <div className='w-full lg:flex lg:space-x-2 lg:space-y-0 space-y-2 items-center'>
                           <select 
                           {...register("category", { required: true })}
                           className='border px-4 py-2 w-full outline-none text-[#9CA3AF]'>
                             <option>Enter Category</option>
                             <option value="new">new</option>
                             <option value="best">best</option>
                             <option value="featured">featured</option>
                           </select>
                           {errors.category && <span className='text-[red] py-1'>this filed can't be emty</span>}

                           <select
                           {...register("product_category", { required: true })}
                            className='border px-4 py-2 w-full outline-none text-[#9CA3AF]'>
                             <option>Product Category</option>
                             <option value="nakles">nakles</option>
                             <option value="ring">ring</option>
                             <option value="earring">earring</option>
                             <option value="banglas">banglas</option>
                             <option value="watch">watch</option>
                           </select>

                      </div>

                      <div className='w-full lg:flex lg:space-x-2 lg:space-y-0 space-y-2 items-center'>
                           <select
                           {...register("trending", { required: true })}
                            className='border px-4 py-2 w-full outline-none text-[#9CA3AF]'>
                             <option>Enter Trending</option>
                             <option value="top">top</option>
                             <option value="old">old</option>
                             
                           </select>

                           <select
                           {...register("available", { required: true })}
                            className='border px-4 py-2 w-full outline-none text-[#9CA3AF]'>
                             <option>Product Available</option>
                             <option value="IN STOCK">IN STOCK</option>
                             <option value="NOT STOCK">NOT STOCK</option>
                             
                           </select>

                      </div>

                      <div className='w-full lg:flex lg:space-x-2 lg:space-y-0 space-y-2 items-center'>
                           <input
                           {...register("sku", { required: true })} 
                           className='border px-4 py-2 w-full outline-none' type="text" placeholder='Products Serial: PRO-1245' />
                           {errors.sku && <span className='text-[red] py-1'>serial</span>}
                           <input
                           {...register("image", { required: true })}
                            className='border px-4 py-2 w-full outline-none' type="url" placeholder='Enter Image URL' />
                            {errors.image && <span className='text-[red] py-1'>url</span>}
                      </div>

                      <div className='w-full flex items-center space-x-2'>
                           <textarea
                           {...register("description", { required: true })}
                            className='border px-4 py-2 w-full outline-none' placeholder='Enter Product Description' cols="30" rows="4"></textarea>
                            {errors.description && <span className='text-[red] py-1'>Enter description</span>}
                      </div>

                      <div className='w-full flex items-center cursor-wait'>
                           <input className='w-full bg-[#D54800] text-white hover:bg-[red] duration-300 py-2 cursor-pointer' type="submit" value="Upload Product" />
                      </div>

                  </form>
             </div>
           </div>
        </div>
    );
};

export default AddProducts;