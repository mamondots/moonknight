import womanImg from '../../../assets/img/woman.webp'

import cateImg1 from '../../../assets/img/nakles5.webp'
import cateImg2 from '../../../assets/img/ring1.webp'
import cateImg3 from '../../../assets/img/earring2.webp'
import cateImg4 from '../../../assets/img/ring4.webp'

const WomanCate = () => {
    return (
        <div className="lg:px-20 md:px-12 px-12 py-6 mt-4">
            <div className="grid lg:grid-cols-2 gap-4 cursor-pointer">

                 <div className='overflow-hidden'>
                    <img className='w-full hover:scale-105 duration-300' src={womanImg} alt="" />
                 </div>

                 <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 lg:gap-2 relative'>

                    <div className='border relative flex items-center justify-center overflow-hidden'>
                    <img className='w-full hover:scale-110 duration-300' src={cateImg1} alt="" />
                    <h2 className='bottom-8 absolute '>NECKLACE</h2>
                    </div>

                    <div className='border relative flex items-center justify-center overflow-hidden'>
                    <img className='w-full hover:scale-110 duration-300' src={cateImg2} alt="" />
                    <h2 className='bottom-6 absolute '>EARRING</h2>
                    </div>

                    <div className='border relative flex items-center justify-center overflow-hidden'>
                    <img className='w-full hover:scale-110 duration-300'  src={cateImg3} 
                    alt="" />
                     <h2 className='bottom-6 absolute '>DIAMOND RING</h2>
                    </div>

                    <div className='border relative flex items-center justify-center overflow-hidden'>
                    <img  className='w-full hover:scale-110 duration-300' src={cateImg4} alt="" />
                    <h2 className='bottom-6 absolute '>RUBY JEWELRY</h2>
                    </div>

                 </div>

            </div>
        </div>
    );
};

export default WomanCate;