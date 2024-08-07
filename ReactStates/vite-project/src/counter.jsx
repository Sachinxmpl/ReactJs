//! the state is a built in React object that is used to contain data or information about the component . A components state can change over time . we need state to re-render any change in the component 

//! the state is a built-in React object that is used to contain data or information about the component . using states whenever the component's state changes over time , it re-renders

import { useState } from 'react';

function init(){
    console.log("Init was called")
    return Math.random()
}

export default function Counter(){
    let [stateVariable , setStateVariable] = useState(0)
    // let [count , setCount] = useState(init())
    let [count , setCount] = useState(init) //only pass the function as a reference , donot call it 

    console.log("Component is rendered")
    console.log("Outside function count is " + count) 

    function increaseCount(){

        //  setCount(count + 1) 
        //  setCount(count + 1) 
        //  setCount(count + 1) 
        //  setCount(count + 1) 

        setCount((count)=>{
            return count + 1 
        })
        setCount((count)=>{
            return count + 1 ; 
        })
        console.log("Inside function count is " + count )
    }

    return (
            <div>
                <h3 onClick={increaseCount}> Count={count}</h3>
                <button onClick={increaseCount}> Increase count </button>
            </div>
    )
}