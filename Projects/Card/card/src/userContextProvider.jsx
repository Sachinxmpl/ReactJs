import React, { useState } from "react"
import userTestContext from "./context/userContext"

const UserContextProvider = ({children})=>{
        const [user , setUser] = useState("shamsher")
        return (
            <userTestContext.Provider
              value = {
                   {
                    user , setUser 
                   }
            }>
                {
                    children
                }
            </userTestContext.Provider>
        )
}

export default UserContextProvider