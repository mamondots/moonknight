import React, { useEffect, useState } from 'react';

const AllBlogs = () => {
    const [blogs,setBlogs] = useState([])
    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => {
            setBlogs(data)
        })
    },[])
    return (
        <div className='lg:px-20 md:px-12 px-12 py-6'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 py-4 mt-4'>
                 {
                    blogs.map(blog => <div key={blog.id}>

                        <div className='group cursor-pointer'>
                            <div className='overflow-hidden'>
                                <img className='group-hover:scale-110 duration-300' src={blog.image} alt="" />
                            </div>

                            <div className='py-2'>
                                <p className='text-[#5e5e5e]'>{blog.date} | <span className='text-[#C29958]'>Corano</span></p>
                                <h2 className='py-1 group-hover:text-[#C29958] duration-300'>{blog.title}</h2>
                            </div>
                        </div>

                    </div>)
                 }
            </div>
        </div>
    );
};

export default AllBlogs;