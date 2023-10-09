
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import animation from '../../loginAnimation.json'

const LogIn = () => {
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

               <div></div>
           </div>

        </div>
    );
};

export default LogIn;