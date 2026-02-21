
import { useContext } from "react"
import { ProductContext } from "../App"


function Cart(){
  const {cardItem}=useContext(ProductContext);
  
    return (
        <h1>Total Item in cart:{cardItem}</h1>
    )
}

export default Cart;