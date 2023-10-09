import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React, { useContext, useState } from 'react';

import './ProductCard.css'

import { BiSearch } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { AuthContext } from '../../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { title, price, rating, image, _id } = product

    const [popupContent, setPopupContent] = useState([])
    const [popupTogle, setPopupTogle] = useState(false)
    const changeContent = (product) => {
        setPopupContent([product])
        setPopupTogle(!popupTogle)
    }

    const [count,setCount] = useState(1)

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleAddToCart = (product) =>{
        if (user && user.email) {
            const seletedClass = {seletedId:_id, title, image, rating, price, email: user.email }
            fetch('https://summer-comp-server-site.vercel.app/seleted', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(seletedClass)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'products added successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please First Login!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }
    return (
        <div>
            <div className='border relative card'>
                <div className=''>
                    <img src={image} alt="" />
                    <div className='absolute top-[30%] right-[8%] space-y-4 cursor-pointer icon-view'>
                        <div onClick={() => changeContent(product)} className='flex items-center space-x-2 view-card'>
                            <p className='px-2 py-2 bg-[#D54800] text-white text-sm rounded quick-text' >Quick View</p>
                            <p className='px-2 py-2 bg-[#D54800] text-white text-xl rounded quick-icon'><BiSearch></BiSearch></p>
                        </div>

                        <div onClick={() =>handleAddToCart(product)} className='flex items-center space-x-2 view-card'>
                            <p className='px-2 py-2 bg-[#D54800] text-white text-sm rounded quick-text'>Add to Cart</p>
                            <p className='px-2 py-2 bg-[#D54800] text-white text-xl rounded quick-icon'><AiOutlineShoppingCart></AiOutlineShoppingCart></p>
                        </div>
                    </div>
                </div>
                <div className='py-4 flex flex-col items-center justify-center text-center'>
                    <h2 className='py-2'>{title}</h2>
                    <p className=''><Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    /></p>
                    <p className='py-2 text-[#c4c3c3] card-price'>${price}-$120</p>
                    <button  className='border py-2 px-8 text-[#c4c3c3] hover:text-white hover:bg-[#262626] duration-300 card-btn'>VIEW PRODUCT</button>
                </div>
            </div>

            {
                popupTogle && <div className='popup-container px-40 py-28' onClick={changeContent}>
                    <div className='popup-body bg-white relative px-8 py-8  inline-block' onClick={(e) => e.stopPropagation()}>
                        <div className='popup-header'>
                            <button onClick={changeContent} className=' bg-red-500
                             text-white cursor-pointer px-2 py-2 text-xl absolute right-12
                             '><AiOutlineClose></AiOutlineClose></button>
                        </div>
                        <div className='popup-content'>
                            {
                                popupContent.map((pop) => {
                                    return (
                                        <div key={pop.id}>
                                            <div className='lg:flex gap-6'>
                                                <div className=' w-1/3'><img className=' border h-full ' src={pop.image} alt="" />
                                                </div>
                                                <div className='w-2/3'>
                                                    <div>
                                                        <h2 className='text-xl py-2'>{pop.title}</h2>
                                                        <p className='text-xl font-medium text-[#8c8c8cc2]'>${pop.price}-$120.00</p>
                                                        <p className='pb-2'><Rating
                                                            style={{ maxWidth: 100 }}
                                                            value={pop.rating}
                                                            readOnly
                                                        /></p>
                                                        <p>AVAILABILITY :  <span className='text-[#8DC87B]'>{pop.available}</span></p>
                                                        <p>SKU:  <span className='text-[#8c8c8cc2]'>{pop.sku}</span></p>
                                                        <p  className='text-[#8c8c8cc2] py-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magn...</p>
                                                        <div className='flex items-center text-xl text-[#9d9d9d] mt-2 cursor-pointer'>
                                                            <p className='px-3 py-1 border hover:bg-[#9d9d9d] hover:text-[red] duration-300'
                                                            onClick={() => setCount(count-1)}
                                                            >-</p>
                                                            <p className='px-5 py-1 border'>{count}</p>
                                                            <p className='px-3 py-1 border hover:bg-[#9d9d9d] hover:text-[red] duration-300'
                                                             onClick={() => setCount(count+1)}
                                                            
                                                            >+</p>
                                                        </div>
                                                        <div className='space-x-4 pt-6 cursor-pointer'>
                                                            <button className='border border-[#262626] bg-[#262626] text-white px-10 py-2 font-semibold text-sm hover:bg-[#EF4444] duration-300 hover:border-[#EF4444]'>ADD TO CART</button>
                                                            <button className='border border-[#262626] px-10 py-2 font-semibold text-sm hover:bg-[#262626] hover:text-white duration-300'>BUY IT NOW</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default ProductCard;