import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import banner1 from '../../../assets/img/slider.webp'
import banner2 from '../../../assets/img/slider2.webp'
import banner3 from '../../../assets/img/slider3.webp'

import './Banner.css'

const Banner = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed:500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className="lg:px-20 md:px-12 px-12">
                <Slider {...settings}>
                    <div className="relative">
                        <img className="w-full" src={banner3} alt="" />
                        <div className="top-0 absolute text-white lg:px-20 md:px-12 sm:px-8 px-4 lg:py-16 md:py-8 sm:py-4 py-2">
                            <p className="lg:text-xl md:text-base sm:text-base text-[14px] font-bold lg:py-2">When you know, you know</p>
                            <h2 className="lg:text-5xl md:text-3xl sm:text-xl text-base font-extrabold tracking-widest text-[#FFCB57] lg:py-1">Engagement</h2>
                            <h2 className="lg:text-5xl md:text-3xl sm:text-xl text-base font-extrabold tracking-widest text-[#FFCB57]">Rings</h2>
                            <p className="lg:py-4 md:py-2 sm:py-2 lg:text-base md:text-base text-[12px]">The engagement ring you choose is such a sentimental piece of jewellery, it is <br></br>a memory you will cherish forever</p>
                            <button className="py-2 px-6 border border-[#fff] lg:mt-2 hover:bg-[#E85B40] hover:border-[#E85B40] duration-300">View All Collection</button>
                        </div>
                    </div>
                    <div>
                        <img className="w-full" src={banner2} alt="" />
                        <div className="top-0 absolute text-white lg:px-20 md:px-12 sm:px-8 px-4 lg:py-16 md:py-8 sm:py-4 py-2">
                            <p className="lg:text-xl md:text-base sm:text-base text-[14px] font-bold lg:py-2">When you know, you know</p>
                            <h2 className="lg:text-5xl md:text-3xl sm:text-xl text-base font-extrabold tracking-widest text-[#FFCB57] lg:py-1">WEDDING</h2>
                            <h2 className="lg:text-5xl md:text-3xl sm:text-xl text-base font-extrabold tracking-widest text-[#FFCB57]">Rings</h2>
                            <p className="lg:py-4 md:py-2 sm:py-2 lg:text-base md:text-base text-[12px]">The engagement ring you choose is such a sentimental piece of jewellery, it is <br></br>a memory you will cherish forever</p>
                            <button className="py-2 px-6 border border-[#fff] lg:mt-2 hover:bg-[#E85B40] hover:border-[#E85B40] duration-300">View All Collection</button>
                        </div>
                    </div>
                    <div>
                        <img className="w-full" src={banner1} alt="" />
                        <div className="top-0 absolute text-white lg:px-20 md:px-12 sm:px-8 px-4 lg:py-16 md:py-8 sm:py-4 py-2">
                            <p className="lg:text-xl md:text-base sm:text-base text-[14px] font-bold lg:py-2">When you know, you know</p>
                            <h2 className="lg:text-5xl md:text-3xl sm:text-xl text-base font-extrabold tracking-widest text-[#FFCB57] lg:py-1">DIAMOND</h2>
                            <h2 className="lg:text-5xl md:text-3xl sm:text-xl text-base font-extrabold tracking-widest text-[#FFCB57]">Jewelry</h2>
                            <p className="lg:py-4 md:py-2 sm:py-2 lg:text-base md:text-base text-[12px]">The engagement ring you choose is such a sentimental piece of jewellery, it is <br></br>a memory you will cherish forever</p>
                            <button className="py-2 px-6 border border-[#fff] lg:mt-2 hover:bg-[#E85B40] hover:border-[#E85B40] duration-300">View All Collection</button>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Banner;