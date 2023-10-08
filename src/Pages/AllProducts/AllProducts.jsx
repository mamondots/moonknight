import { BiSearch } from 'react-icons/bi';
import sideImg from '../../assets/img/sidebar.webp'
import { useEffect, useState } from 'react';
import ProductCard from '../Home/ProductsPage/ProductCard/ProductCard';
import './AllProducts.css'
const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const [perPageItems, setPerPageItems] = useState(5)

    const [pageNumberlimit, setPageNumberlimit] = useState(3)
    const [maxPageNumberlimit, setMaxPageNumberlimit] = useState(3)
    const [minPageNumberlimit, setMinPageNumberlimit] = useState(0)

    const pages = [];
    for (let i = 1; i <= Math.ceil(products.length / perPageItems); i++) {
        pages.push(i)
    }

    const handleClick = (e) =>{
        setCurrentPage(Number(e.target.id))
    }

    const renderPageNumber = pages.map((number) => {
       if(number < maxPageNumberlimit + 1 && number > minPageNumberlimit){
        return (
            <div key={number}>
                <li id={number} onClick={handleClick}
                className={currentPage === number ? "active":null}
                >
                    {number}
                </li>
            </div>
        )
       }
    })

    const indexOfLastItems = currentPage * perPageItems;
    const indexOfFirstItems = indexOfLastItems - perPageItems;
    const currentProducts = products.slice(indexOfFirstItems,indexOfLastItems)

    const handleNexBtn = () =>{
        setCurrentPage(currentPage+1)

        if(currentPage+1 > maxPageNumberlimit){
            setMaxPageNumberlimit(maxPageNumberlimit+pageNumberlimit) 
            setMinPageNumberlimit(minPageNumberlimit+pageNumberlimit) 
        }
    }

	
    const handlePrevBtn = () =>{
        setCurrentPage(currentPage-1)

        if((currentPage-1) % pageNumberlimit == 0){
            setMaxPageNumberlimit(maxPageNumberlimit-pageNumberlimit) 
            setMinPageNumberlimit(minPageNumberlimit-pageNumberlimit) 
        }
    }

    let pagesIncrementBtn = null;
    if(pages.length > maxPageNumberlimit){
        pagesIncrementBtn = <li onClick={handleNexBtn}> ...</li>
    }

	
    let pagesDicrementBtn = null;
    if(minPageNumberlimit >= 1){
        pagesDicrementBtn = <li onClick={handlePrevBtn}> ...</li>
    }

    return (
        <div className='lg:px-20 md:px-12 px-12 py-6'>
            <div className='relative'>
                <input className='py-2 w-full px-4 border outline-none' type="text" placeholder='Search your jewelry' />
                <button className='top-0 right-0 absolute py-2 px-12 bg-[#D54800] hover:bg-[red] duration-300 text-white text-xl h-full'><BiSearch></BiSearch></button>
            </div>

            <div className='flex gap-8 py-12'>

                <div className='w-1/4  space-y-2'>
                    <div className='border px-4 py-4 bg-[#F5F5F5]'>
                        <h2 className='text-xl border-b py-2'>Categories</h2>
                        <ul className='py-4 space-y-2 text-[#3c3b3ba0]'>
                            <li><a href="">Fashionware</a></li>
                            <li><a href="">Kitchenware</a></li>
                            <li><a href="">Electronics</a></li>
                            <li><a href="">Accessories</a></li>
                            <li><a href="">Shoe</a></li>
                            <li><a href="">Toys</a></li>
                        </ul>
                    </div>

                    <div className='border px-4 py-4 bg-[#F5F5F5]'>
                        <h2 className='text-xl border-b py-2'>Price</h2>
                        <div className='flex items-center py-8 relative'>
                            <p className='py-1 px-1 rounded-full bg-[#fff] shadow-xl border-[#C29958] border-4 cursor-pointer absolute left-0'></p>
                            <p className='py-[3px] px-2 w-full bg-[#C29958] rounded-full'></p>
                            <p className='py-1 px-1 rounded-full bg-[#fff] shadow-xl border-[#C29958] border-4 cursor-pointer absolute right-0'></p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm'>Price: <span className='text-[#2e2e2eaf] px-1'>$1 - $1000</span></p>
                            <p className='text-sm py-2 px-4 bg-[#EBEBEB] cursor-pointer hover:bg-[#C29958] hover:text-white duration-300'>FILTER</p>
                        </div>
                    </div>

                    <div className='border px-4 py-4 bg-[#F5F5F5]'>
                        <h2 className='text-xl border-b py-2'>Brand</h2>
                        <div className='py-4 space-y-2 text-[#3c3b3ba0]'>
                            <div className='flex items-center'>
                                <input type="checkbox" />
                                <p className='px-2'>Studio</p>
                            </div>

                            <div className='flex items-center'>
                                <input type="checkbox" />
                                <p className='px-2'>Hastech</p>
                            </div>

                            <div className='flex items-center'>
                                <input type="checkbox" />
                                <p className='px-2'>Quickiin</p>
                            </div>

                            <div className='flex items-center'>
                                <input type="checkbox" />
                                <p className='px-2'>Graphic Corner</p>
                            </div>

                        </div>
                    </div>

                    

                </div>

                <div className='w-3/4'>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                        {
                            currentProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                        }
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='pageNumbers'>
                        <li><button onClick={handlePrevBtn} disabled={currentPage == pages[0] ? true: false}>Prev</button></li>
                        {pagesIncrementBtn}
                        {renderPageNumber}
                        {pagesDicrementBtn}
                        <li><button onClick={handleNexBtn} disabled={currentPage == pages[pages.length-1] ? true: false}>Next</button></li>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllProducts;