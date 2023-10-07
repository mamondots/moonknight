import { useEffect, useState } from "react";
import ProductCard from "../ProductsPage/ProductCard/ProductCard";

const Treanding = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const topProducts = products.filter((product) => product.trending === 'top')
    return (
        <div className='lg:px-20 md:px-12 px-12 py-12'>
           <div className="flex justify-center flex-col items-center">
               <h2 className="text-2xl font-bold">Hot Trending</h2>
               <p className="text-[#727272] py-1">Check out our top trending products this month</p>
           </div>

           <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6 py-12">
                        {
                           topProducts.slice(0,4).map(product =><ProductCard key={product.id} product={product}></ProductCard>) 
                        }
            </div>
        </div>
    );
};

export default Treanding;