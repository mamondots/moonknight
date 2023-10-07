import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import brandImg1 from '../../../assets/img/brand1.webp'
import brandImg2 from '../../../assets/img/brand2.webp'
import brandImg3 from '../../../assets/img/brand3.webp'
import brandImg4 from '../../../assets/img/brand4.webp'
import brandImg5 from '../../../assets/img/brand5.webp'
import brandImg6 from '../../../assets/img/brand6.webp'

const Brand = () => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed:500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className="lg:px-20 md:px-12 px-12 py-6">
            <div>
            <Slider {...settings}>
                    <div><img src={brandImg1} alt="" /></div>
                    <div><img src={brandImg2} alt="" /></div>
                    <div><img src={brandImg3} alt="" /></div>
                    <div><img src={brandImg4} alt="" /></div>
                    <div><img src={brandImg5} alt="" /></div>
                    <div><img src={brandImg6} alt="" /></div>

                </Slider>
            </div>
        </div>
    );
};

export default Brand;