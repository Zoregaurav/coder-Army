import { useState } from "react";
// count->value change
// React ko bol du,ya signal de du
// count use ho raha hain,udhar usko update kar do

let count=1;
//useState, count=1, return setCount function
//setCount->Count ki value ko update kar sakte ho,and App function ko re-render kar sakte ho...

 
export default function App() {
  //this is the useState logic:
  let [count, setCount] = useState(0);


  
  function increaseNumber() {
    setCount(count + 1);
  }

  //this is UI:
  return (
    <>
      <p>Counter:{count}</p>
      <button onClick={increaseNumber}>Increment</button>
    </>
  );
}
