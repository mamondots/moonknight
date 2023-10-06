import React from 'react';

const ProductCard = ({product}) => {
    const {title,price,rating,image} = product
    return (
        <div>
            <div>
                 <img src={image} alt="" />
            </div>
        </div>
    );
};

export default ProductCard;