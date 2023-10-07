import iconImg from '../../../assets/img/web.png'
import iconImg2 from '../../../assets/img/car.png'
import iconImg3 from '../../../assets/img/monrybag.png'

const DeliverPage = () => {
    return (
        <div className="lg:px-20 md:px-12 px-12 pb-8">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

                <div className='flex flex-col justify-center items-center text-center'>
                    <img className='py-2' src={iconImg} alt="" />
                    <h2>WORLDWIDE DELIVERY</h2>
                    <p className='py-2 text-[#6d6d6db4] lg:px-8'>We work with the biggest delivery networks. It doesn't matter where in the world you are. We'll deliver it to you.</p>
                </div>

                <div className='flex flex-col justify-center items-center text-center'>
                    <img className='py-2' src={iconImg2} alt="" />
                    <h2>FREE SHIPPING</h2>
                    <p className='py-2 text-[#6d6d6db4] lg:px-8'>Stop wondering about shipping costs, what you see is what you pay. Our shipping is always free in every purchase.</p>
                </div>

                <div className='flex flex-col justify-center items-center text-center'>
                    <img className='py-2' src={iconImg3} alt="" />
                    <h2>MONEY BACK GUARANTEE</h2>
                    <p className='py-2 text-[#6d6d6db4] lg:px-8'>Got a problem with the product? Don't worry, we have a 30 day money back guarantee. See our return policy.</p>
                </div>

            </div>
        </div>
    );
};

export default DeliverPage;