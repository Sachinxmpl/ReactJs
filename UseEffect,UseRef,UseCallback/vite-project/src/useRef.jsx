import React from "react";
import { useEffect , useRef }  from "react";


//?This component uses a ref to keep track of how many times the button was clicked. Note that it’s okay to use a ref instead of state here because the click count is only read and written in an event handler.


export default function Useref(){
    let ref = useRef(0)
    function handleClick(){
        ref.current = ref.current + 1 ;
        alert(`Buttn was clicked ${ref.current} times `) 

    }

    return (
        <button onClick={handleClick}> Click Me!</button>
    )
}