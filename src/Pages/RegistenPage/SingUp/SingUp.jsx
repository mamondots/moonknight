
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import singUpAnimation from '../../signupAnimation.json'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { FaGooglePlusG } from 'react-icons/fa';
import { BiLogoFacebook } from 'react-icons/bi';

const SingUp = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const {createUser,signInWithGoogle,updateUserProfile} = useContext(AuthContext)
    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const onSubmit = (data) =>{
        createUser(data.email, data.password)
        .then(result =>{
            const startUser = result.user
            console.log(startUser)
            updateUserProfile(data.name, data.photoURL)
            navigate(from, {replace:true})
        })
    }

    const handleGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            const googleUser = result.user
            console.log(googleUser)
            
        })
    }
    return (
        <div className='lg:px-20 md:px-12 px-12 py-6'>
            <div className='w-full flex items-center space-x-2 px-4 py-4 bg-[#2a2a2a58] cursor-pointer'>
                <Link to='/'><p className='hover:text-[red] duration-300'>Home</p></Link>
                <p>/</p>
                <p>SingUp Here</p>
            </div>

            <div className='grid lg:grid-cols-2 gap-8 mt-10'>

                <div className='border'>
                    <Lottie animationData={singUpAnimation} loop={true} />
                </div>

                <div className='border'>
                    <div className='text-center py-6'>
                        <h2 className='text-xl font-medium'>Sign Up Now</h2>
                        <p className='lg:px-8 py-2 text-[#676666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aspernatur?</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='lg:px-12 px-6 py-2 space-y-2'>

                        <div className='flex flex-col space-y-1 w-full'>
                            <label>Your Name</label>
                            <input
                            {...register("name", { required: true })}
                             className='w-full border outline-none py-2 px-4' type="text" placeholder='Enter Your Name' />
                             {errors.name && <span className='text-[red] py-1'>place enter name</span>}
                            
                        </div>

                        <div className='flex flex-col space-y-1 w-full'>
                            <label>Your Email</label>
                            <input
                            {...register("email", { required: true })}
                             className='w-full border outline-none py-2 px-4' type="text" placeholder='Enter Your Email' />
                             {errors.email && <span className='text-[red] py-1'>place enter email</span>}
                            
                        </div>

                        <div className='lg:flex items-center lg:space-x-2 lg:space-y-0 space-y-2'>

                            <div className='flex flex-col space-y-1 w-full'>
                                <label>Your Password</label>
                                <input
                                {...register("password", { required: true, minLength:6,maxLength:20 })}
                                 className='w-full border outline-none py-2 px-4' type="password" placeholder='Enter Your Password' />
                                 {errors.password && <span className='text-[red] py-1'>place enter password</span>}
                                 
                            </div>

                            <div className='flex flex-col space-y-1 w-full'>
                                <label>Confirm Password</label>
                                <input
                                {...register("confirmPassword", { required: true,minLength:6,maxLength:20 })}
                                 className='w-full border outline-none py-2 px-4' type="password" placeholder='Enter Confirm Password' />
                                 {errors.confirmPassword && <span className='text-[red] py-1'>place enter Confirm Password</span>}
                            </div>

                        </div>


                        <div className='flex flex-col space-y-1 w-full'>
                            <label>Your Photo</label>
                            <input
                            {...register("photoURL", { required: true })}
                             className='w-full border outline-none py-2 px-4' type="url" placeholder='Enter Photo URL ' />
                              {errors.photoURL && <span className='text-[red] py-1'>place enter photo url</span>}
                        </div>

                        <div className='w-full pt-4'>
                            <input className='w-full border py-2 text-center bg-[#D54800] text-white hover:bg-[red] duration-300 cursor-pointer' type="submit" value="Sing Up" />
                        </div>

                        <div className='py-2'>
                            <h2 className='text-center'>Log In With</h2>
                            <div className='flex items-center justify-center py-2 space-x-2 cursor-pointer'>
                                <p onClick={handleGoogle} className='py-2 px-2 border bg-[#D54800] text-white rounded-full text-2xl hover:bg-[red]'><FaGooglePlusG></FaGooglePlusG></p>
                                <p className='py-2 px-2 border bg-[#D54800] text-white rounded-full text-2xl hover:bg-[red]'><BiLogoFacebook></BiLogoFacebook></p>
                            </div>
                        </div>

                    </form>

                    <div className='text-center py-4'>
                          <p className='text-[#636363]'>If Your Have account plz <Link to='/login'><span className='font-medium text-[#D54800] cursor-pointer hover:text-[red] duration-300 '>Log In</span></Link> Now</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingUp;