import React from "react"
import { useReducer } from "react"

export default function App(){

  const reducerFn = (count , action) =>{
    if(action.type === "increment"){
      return count + 1 
    }else if (action.type === "decrement"){
      return count -1 
    }
  }

  const [count , dispatch] = useReducer(reducerFn , 0)

  return (
      <>
        <h1> Count : {count}</h1>
        <button onClick={()=> dispatch({type : "increment"})}> Increase Count </button>
        <button onClick={()=> dispatch ({type : "decrement"})}> Decrease Count </button>
      </>
  )
}