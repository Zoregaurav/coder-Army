import React from "react";


//react memo kya karta hein->props ko compare karta hein that set and child ko tabhi re-render karta hein jab props ki value change hoti hein->child element ko remember karta hein kisiko call karna hein ya kisiko nahi karna hein call..

const Sum=React.memo((number) => {
  function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= 1000; i++) {
      sum += i;
    }
    return sum;
}
  console.log("sum render"); 
  const total = calculateSum();
  return (
    <>
      <h1>This is our Math Library</h1>
      <h2>Sum: {total}</h2>
    </>
  );
});
export default Sum;

