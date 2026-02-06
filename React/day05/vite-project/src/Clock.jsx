import { useEffect } from "react";
import { useState } from "react";

 function Clock(){

     const [time,setTime]=useState(new Date().toLocaleTimeString())
     const[show,setShow]=useState(true);

     useEffect(()=>{
        if(!show)
           return;

      const interValId=setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
        console.log("Hii");
     },1000)

     return ()=>{
        clearInterval(interValId);
     }
    },[show])
  

    return(
        <>
        <button onClick={()=>setShow(!show)}>{show?"hide":"show"}</button>
         {
            show&&<h1>Current Time:{time}</h1>
         }
        </>
    )
 }

 export default Clock;  