import { useCallback, useMemo, useState } from "react";
import Sum from "./Sum";
import Post from "./Post";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000);

  // Memoized function
  const handleClick = useCallback(() => {
    console.log("Handle Click", count);
  }, [count]);

  // Memoized heavy calculation
  const prime = useMemo(() => {
    function calculatePrime(number) {
      let total = 0;

      for (let i = 2; i <= number; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
          if (i % j === 0) {
            isPrime = false;
            break;
          }
        }

        if (isPrime) total++;
      }

      return total;
    }

    return calculatePrime(number);
  }, [number]);

  // Memoized object
  const obj = useMemo(() => {
    return { name: "Rohit", age: 20 };
  }, []);

  console.log("App Render");

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Your current Number: {number}</h2>
      <button onClick={() => setNumber(number + 10000)}>
        Increment Number
      </button>

      <h3>Total Prime Numbers: {prime}</h3>

      <Sum number={number} />
      <Post value={obj} />
    </>
  );
}

export default App;
