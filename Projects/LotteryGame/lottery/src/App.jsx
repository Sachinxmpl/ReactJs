import React from "react"
import { useState } from "react"
import Lottery from "./lottery"

function App() {
  let [number , setNumber] = useState(0)
    let [message , setMessage] = useState("Lottery game ")
    
    let playGame = ()=>{
        const a = Math.floor(Math.random()*10)
        const b = Math.floor(Math.random()*10)
        const c = Math.floor(Math.random()*10)
        let newNumber = a*100 + b*10 + c 
        setNumber(newNumber)

        let sum = 0 ; 
        while( newNumber !=0 ){
            sum = sum + newNumber % 10 ; 
            newNumber =  parseInt(newNumber/10) ;
        }
        console.log(sum)
        if(sum == 15){
            setMessage("Congratulations you won game ")
        }
        else{
            setMessage("Lottery Game ")
        }
    }


  return (
    <>
      <Lottery/>
    </>
  )
}

export default App
