import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";


const MyProducts = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/carts')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <div className="lg:px-20 md:px-12 px-12 py-6">
            this is my products

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
                {
                    items.map(item => <div key={item._id}>
                        <div className="border">
                            <img src={item.image} alt="" />
                            <div className='py-4 flex flex-col items-center justify-center text-center'>
                                <h2 className='py-2'>{item.title}</h2>
                                <p className=''><Rating
                                    style={{ maxWidth: 100 }}
                                    value={item.rating}
                                    readOnly
                                /></p>
                                <p className='py-2 text-[#c4c3c3] card-price'>${item.price}-$120</p>
                                <button className='border py-2 px-8 text-[#c4c3c3] hover:text-white hover:bg-[#262626] duration-300 card-btn'>VIEW PRODUCT</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyProducts;