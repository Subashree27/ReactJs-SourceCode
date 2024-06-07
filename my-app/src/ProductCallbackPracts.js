import React from 'react';
const ProductCallbackPracts=({name,addtocart})=>{
    console.log(`${name} Product Component is re-rendered`)
    return(
        <div className='product'>
            <h1>{name}</h1>
            <button onClick={addtocart}>Add to cart</button>
        </div>
    )
}
export default React.memo(ProductCallbackPracts);


