import { useState } from "react";

function  Counter(){
     const [count,setCount]=useState([10,20,30]);
    
      function handleChange(){
        setCount([...count,40]);
      }
      
       return(
        <>
        <h1>Counter Application:{count}</h1>
        <button onClick={handleChange}>Increment</button>
        {/* <button onClick={()=>setCount(count-1)}>Decrement</button> */}
        </>
       )
}
export default Counter;