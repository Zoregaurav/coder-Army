import { useState,createContext } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export const CounterContext=createContext();
export const ProductContext=createContext();



function App(){
  // const[count,setCount]=useState(0);

  const[cardItem,setCardItem]=useState(0);

  return(
    <>
    {/* <CounterContext value={{count,setCount}}> */}
    <ProductContext value={{cardItem,setCardItem}}>
    <Header/>
    <Body/>
    <Footer/>
    </ProductContext>
    {/* </CounterContext> */}
    </>
  )
}

export default App;