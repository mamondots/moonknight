import { BiSearch, BiHeart, BiMenu } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Navbar.css'
import { Link } from 'react-router-dom';
import userImg from '../../assets/img/userImg.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(result => {
                const user = result.user
                console.log(user)
            })
    }
    return (
        <div className='lg:px-20 md:px-12 px-12 py-6 bg-white'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-xl font-semibold'>MamonDots</h2>
                </div>

                <div className='hidden lg:block'>
                    <div className='flex items-center space-x-12'>
                        <div className=''>
                            <ul className='flex items-center space-x-6 nav-link text-base'>
                                <li><Link to='/'><a href="">Home</a></Link></li>
                                <li><Link to='/allproducts'><a href="">All jewelry</a></Link></li>
                                <li><Link to='/myproducts'><a href="">My Jewelry</a></Link></li>
                                <li><Link to='/addproducts'><a href="">Add jewelry</a></Link></li>
                                <li><Link to='/allblogs'><a href="">Blogs</a></Link></li>
                            </ul>
                        </div>

                        <div className='flex items-center space-x-4 text-lg cursor-pointer'>
                            <p className='text-xl'><BiSearch></BiSearch></p>
                            <p className='text-xl'><BiHeart></BiHeart></p>
                            <p className='text-xl'><AiOutlineShoppingCart></AiOutlineShoppingCart></p>
                            <div>
                                {
                                    user ?
                                        <>
                                            <div className='das'>

                                                <div >
                                                    {
                                                        user?.photoURL
                                                            ?
                                                            <>
                                                                <img className='rounded-full w-8 h-8' src={user.photoURL} alt="" />
                                                            </>
                                                            :
                                                            <>
                                                                <img className='rounded-full w-8 h-8' src={userImg} alt="" />
                                                            </>
                                                    }
                                                </div>

                                                <div className='bg-[#D54800] text-white hover:bg-[#061E43] duration-300 cursor-pointer px-4 py-2 absolute right-10 z-10 mt-2 board rounded'>
                                                    <h2 onClick={handleLogout} className='py-2 hover:text-[#ff00009d] duration-300'>Logout</h2>
                                                    <Link to='/clientboard'>
                                                        <h2 className='pb-1 hover:text-[#ff00009d] duration-300'>Client Dashboard</h2>
                                                    </Link>

                                                    <Link to='/dasboard'>
                                                        <h2 className='pb-1 hover:text-[#ff00009d] duration-300'>Owner Dashboard</h2>
                                                    </Link>
                                                </div>

                                            </div>

                                        </>
                                        :
                                        <>
                                            <Link to='/login'><p>Login</p></Link>
                                        </>
                                }

                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:hidden block'>
                    <p className='text-2xl px-2 py-2 rounded-md text-white bg-[#E85B40] hover:scale-105 duration-300 cursor-pointer'><BiMenu></BiMenu></p>
                </div>

            </div>
        </div>
    );
};

export default Navbar;