import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddProducts = () => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const onSubmit = (data) =>{
        console.log(data)
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
                      </div>

                      <div className='w-full lg:flex lg:space-x-2 lg:space-y-0 space-y-2 items-center'>
                           <input
                           {...register("price", { required: true })}
                            className='border px-4 py-2 w-full outline-none' type="text" placeholder='Enter Price' />
                           <input
                           {...register("rating", { required: true })}
                            className='border px-4 py-2 w-full outline-none' type="text" placeholder='Enter Rating 1-5' />
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
                           <input
                           {...register("image", { required: true })}
                            className='border px-4 py-2 w-full outline-none' type="url" placeholder='Enter Image URL' />
                      </div>

                      <div className='w-full flex items-center space-x-2'>
                           <textarea
                           {...register("description", { required: true })}
                            className='border px-4 py-2 w-full outline-none' placeholder='Enter Product Description' cols="30" rows="4"></textarea>
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