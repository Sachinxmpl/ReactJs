import React from "react"
import {useState} from "react"


export default function Form() {
    let styles={
        height : "250px" , 
        width : "700px" , 
        margin : "auto",
        margintop :"16px",
        borderRadius : "20px",
        border :"2px solid black"

    }
    let styles2={
        margin : "20px auto" , 
        display : "flex" , 
        flexDirection : "row" , 
        gap : "30px",
        justifyContent : "center"
    }

    const [text,setText] = useState('Enter your text') ; 
    const  handleChange = (event)=>{
        setText(event.target.value)
    }
    const ToUpperCase  = ()=>{
        setText(text.toUpperCase())
    }
    const ToLowerCase = ()=>{
        setText(text.toLowerCase())
    }
    const FindLength = ()=>{
        setText(text.length)
    }
    return (
        <>
            <div className="form-floating">
                <textarea className="form-control mt-8 " style={styles} placeholder="Leave a comment here" value={text} onChange={handleChange}></textarea>
            </div>
           <div className="btn-container" style={styles2}>
                <button className="btn btn-primary" onClick={ToUpperCase}>UpperCase</button>
                <button className="btn btn-primary" onClick={ToLowerCase}>Lowercase</button>
                <button className="btn btn-primary" onClick={FindLength}>Length</button>
           </div>
        </>
    )
}