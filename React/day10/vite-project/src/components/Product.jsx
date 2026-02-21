import { useContext, useState } from "react";
import { ProductContext } from "../App";


function Product({item}){

     const[AddToCart,setAddToCart]=useState(false);
     const {cardItem,setCardItem}=useContext(ProductContext);

    return (
        <>
        <div>
            <h1>Name:{item.name}</h1>
            <h2>Price:{item.price}</h2>
            {
              AddToCart ? <button onClick={()=>{setAddToCart(false),setCardItem(cardItem=>cardItem-1)}}>Remove</button>:<button onClick={()=>{setAddToCart(true),setCardItem(cardItem+1)}}>Add</button>
            }
        </div>
        </>
    )
}

export default Product;