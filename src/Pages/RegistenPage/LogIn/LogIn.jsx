
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import animation from '../../loginAnimation.json'

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaGooglePlusG } from 'react-icons/fa';
import { BiLogoFacebook } from 'react-icons/bi';
import { useState } from 'react';
import { useForm } from 'react-hook-form';




const LogIn = () => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const onSubmit = (data) =>{
        console.log(data)
    }
    return (
        <div className='lg:px-20 md:px-12 px-12 py-6'>
            <div className='w-full flex items-center space-x-2 px-4 py-4 bg-[#2a2a2a58] cursor-pointer'>
                <Link to='/'><p className='hover:text-[red] duration-300'>Home</p></Link>
                <p>/</p>
                <p>LogIn Here</p>
            </div>

            <div className='grid lg:grid-cols-2 gap-8 mt-8'>

                <div className='border'>
                    <Lottie animationData={animation} loop={true} />
                </div>

                <div className='border'>
                    <div className='text-center py-8'>
                        <h2 className='text-xl font-medium'>Log In Now</h2>
                        <p className='lg:px-8 py-2 text-[#676666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aspernatur?</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='px-12 py-2 space-y-2'>
                        <div className='flex flex-col space-y-2 w-full'>
                            <label>Your Email</label>
                            <input
                            {...register("email", { required: true })}
                             className='w-full border outline-none py-2 px-4' type="text" placeholder='Enter Your Email' />
                              {errors.email && <span className='text-[red] py-1'>place enter email</span>}
                        </div>

                        <div className='flex flex-col space-y-2 w-full'>
                            <label>Your Password</label>
                            <div className='flex items-center justify-between relative'>
                               <div className='w-full'>
                               <input
                                {...register("password", { required: true })}
                                 className='w-full border outline-none py-2 px-4' type={show ? "text" : "password"} placeholder='Enter Your Password' />
                                 {errors.password && <span className='text-[red] py-1'>enter password</span>}
                               </div>
                                

                                <p onClick={handleShow} className='right-6 absolute text-xl cursor-pointer'>{show ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible>: <AiOutlineEye></AiOutlineEye>}</p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-2'>
                            <input type="checkbox" name="" id="" />
                            <p>Forget Password</p>
                        </div>

                        <div className='w-full pt-4'>
                            <input className='w-full border py-2 text-center bg-[#D54800] text-white hover:bg-[red] duration-300 cursor-pointer' type="submit" value="Log In" />
                        </div>

                        <div className='py-2'>
                            <h2 className='text-center'>Log In With</h2>
                            <div className='flex items-center justify-center py-2 space-x-2 cursor-pointer'>
                                <p className='py-2 px-2 border bg-[#D54800] text-white rounded-full text-2xl hover:bg-[red]'><FaGooglePlusG></FaGooglePlusG></p>
                                <p className='py-2 px-2 border bg-[#D54800] text-white rounded-full text-2xl hover:bg-[red]'><BiLogoFacebook></BiLogoFacebook></p>
                            </div>
                        </div>
                    </form>
                    <div className='text-center'>
                          <p className='text-[#636363]'>If Your Are New Here Plz <Link to='/singup'><span className='font-medium text-[#D54800] cursor-pointer hover:text-[red] duration-300 '>Sing Up</span></Link> First</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;