import { useRef } from "react";

export default function Form(){
    const focusRef = useRef(null)

    const handleSubmit = ()=>{
        focusRef.current.focus()
        focusRef.current.style.backgroundColor="black"
        focusRef.current.style.color="white"
        focusRef.current.value="using ref with DOM "
    }

    return (
        <>
        <input type="text" ref={focusRef} >
        </input>
        <button onClick={handleSubmit}>Focus</button>
        </>
    )
}