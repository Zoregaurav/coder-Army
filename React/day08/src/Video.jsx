import { useRef } from "react";


function Video(){
    const videoRef=useRef(null);

    function handleStart(){
        videoRef.current.play();
    }

    function handleStop(){
        videoRef.current.pause();
 
   }

  function handleRestart(){
     videoRef.current.currentTime=0;
  }


return(
    <>
    <video src="/strike.mp4" width="600" height="400" controls></video>
    <div>
        <button onClick={handleRestart}>Start</button>
        <button> onClick={handleStop}Pause</button>
        <button onClick={handleRestart}>Reset</button>
    </div>
    </>
)

}
export default Video;