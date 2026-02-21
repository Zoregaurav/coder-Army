import { useCallback, useContext } from "react";
import { CounterContext } from "../App";

//values:{count,setCount}

function  Display(){

   const {count}=useContext(CounterContext);
    
     return(
        <>
        <h1>I am Displaying Count:{count}</h1>
        </>
     )

}

export default Display;