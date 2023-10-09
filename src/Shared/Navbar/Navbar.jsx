import { BiSearch,BiHeart,BiMenu } from 'react-icons/bi';
import {AiOutlineShoppingCart } from 'react-icons/ai';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
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
                            <li><a href="">My Jewelry</a></li>
                            <li><Link to='/addproducts'><a href="">Add jewelry</a></Link></li>
                            <li><Link to='/allblogs'><a href="">Blogs</a></Link></li>
                        </ul>
                    </div>

                    <div className='flex items-center space-x-4 text-xl'>
                         <p><BiSearch></BiSearch></p>
                         <p><BiHeart></BiHeart></p>
                         <p><AiOutlineShoppingCart></AiOutlineShoppingCart></p>
                         <Link to='/login'><p>Login</p></Link>
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