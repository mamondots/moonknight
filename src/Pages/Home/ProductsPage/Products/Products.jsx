import { useEffect } from "react";
import { useState } from "react";
import './Products.css'
import ProductCard from "../ProductCard/ProductCard";


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const newProducts = products.filter((product) => product.category === 'new')
    const bestProducts = products.filter((product) => product.category === 'best')
    const featuredProducts = products.filter((product) => product.category === 'featured')

    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <div className="lg:px-20 md:px-12 px-12 py-12">
            <div className="flex items-center justify-center space-x-4">

                <div onClick={() => toggleTab(1)}
                    className={toggle === 1 ? "tabs active-tabs bg-[#D54800] px-8 py-4 text-white" : "tabs px-4"}
                >
                    <button>New Arrivals</button>
                </div>

                <div onClick={() => toggleTab(2)}
                    className={toggle === 2 ? "tabs active-tabs  bg-[#D54800] px-8 py-4 text-white" : "tabs px-4"}>
                    <button>Best Sellers</button>
                </div>

                <div onClick={() => toggleTab(3)}
                    className={toggle === 3 ? "tabs active-tabs  bg-[#D54800] px-8 py-4 text-white" : "tabs px-4"}>
                    <button>Featured Products</button>
                </div>

            </div>

            <div className="mt-12">
                <div className={toggle === 1 ? "content active-content" : "content"}>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
                        {
                           newProducts.map(product =><ProductCard key={product.id} product={product}></ProductCard>) 
                        }
                    </div>
                </div>

                <div className={toggle === 2 ? "content active-content" : "content"}>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
                        {
                           bestProducts.map(product =><ProductCard key={product.id} product={product}></ProductCard>) 
                        }
                    </div>
                </div>

                <div className={toggle === 3 ? "content active-content" : "content"}>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
                        {
                           featuredProducts.map(product =><ProductCard key={product.id} product={product}></ProductCard>) 
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;