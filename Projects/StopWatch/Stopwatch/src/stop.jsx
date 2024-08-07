import React from "react";
import { useEffect, useState, useRef } from "react";
import { formatTime } from "./formatTime";



export default function StopWatch() {
  let [pastime, setPasttime] = useState(null);
  let [newtime, setNewtime] = useState(null);
  let [btnstatus, setBtnstatus] = useState(true);
  let intervalRef = useRef(null);

  const handelStartStop = () => {
    if (btnstatus) {
      setPasttime(Date.now());
      setNewtime(Date.now());

      intervalRef.current = setInterval(() => {
        setNewtime(Date.now());
      }, 10);
    }
    else{
        clearInterval(intervalRef.current)
    }

    setBtnstatus((current)=>{
            if(current == true){
                return false
            }
            else{
                return true
            }
    })
  };

  
  let timer = 0 
  if(pastime !=null && newtime !=null){
    timer = newtime - pastime ; 
    timer = formatTime(timer)
  }

  const handleReset = () =>{
    setPasttime(null);
    setNewtime(null);
  }
  return (
    <>
      <h1> Timer : {timer} </h1>
      <button onClick={handelStartStop}>{btnstatus ? "Start" : "Pause"}</button>

      {
        btnstatus && <button onClick={handleReset}> Reset </button>
      }

    </>
  );
}
