import { useState } from "react";
import Counter from "./Counter";
import Product from "./Product";

function Body() {
  const [items, setItems] = useState([
    { id: 1, name: "Milk", price: 100 },
    { id: 2, name: "Protein", price:200 },
    { id: 3, name: "Almond", price:300 },
    { id: 4, name: "Coconut", price: 70 },
    { id: 5, name: "Amul Ghee", price:1000 },
  ]);

  return (
    <>
      <h1>I am the Blinkit Body</h1>
      {/* <Counter/> */}
      <div style={{display:"flex",gap:"50px"}}>
        {
            items.map((item)=><Product key={item.id} item={item}></Product>)  
        }
      </div>
    </>
  );
}
export default Body;
