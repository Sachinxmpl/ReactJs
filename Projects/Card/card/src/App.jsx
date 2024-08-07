import React from "react"
import userTestContext from "./context/userContext"
import UserContextProvider from "./userContextProvider"
import Login from "./login.jsx"

function App() {


  return (

    <UserContextProvider>
      <Login/>
    </UserContextProvider>

  )
}

export default App
