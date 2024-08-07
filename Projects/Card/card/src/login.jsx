import React from "react"
import userTestContext from "./context/userContext"
import { useContext } from "react"

export default function Login(){
    
    let {user , setUser} = useContext(userTestContext)
    
    return (
        <div>
            <p> User : {user} </p>
            <button onClick={()=>{
                setUser("Sachin")
            }}> Change User </button>
        </div>
    )
}