import {useRef,useState } from "react";

//stopwatch:start,stop.reset

function App(){
  const [time,setTime]=useState(0);
  let intervalIdRef=useRef(null)


  //time ki value ko lock kiya hein yaha par!->closure
  //intervalIdRef={
  // current:"123"
  // }
  // it is created only once re-render karenge:toh dubara create nahi hoga purana wala use hoga

 function handleStart(){
  
      if(intervalIdRef.current!=null){
        return;
    }

    intervalIdRef.current=setInterval(()=>{
       setTime(time=>time+1);
    },1000);
  }

  function handleStop(){
     clearInterval(intervalIdRef.current);
     intervalIdRef.current=null;
  }

  function handleReset(){
      clearInterval(intervalIdRef.current);
      intervalIdRef.current=null;
      setTime(0);
  }


  return(
    <>
    <h1>StopWatch:{time}</h1>
    <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}

export default App;