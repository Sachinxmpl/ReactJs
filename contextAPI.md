## Prop drilling

- There is a parent component that passes the prop to child 1 , child 1 has to use of prop but passes it to its children child 2
- There exist unnecessary flow of prop , child 1 has no concern to deal with that prop
- Code becomes unnecessary complicated full of dependencies
- In industry level code with huge no of components this causes serious problem 

- Normally we cannot do state management with react 

### To prevene this problem Context API were introduced

- Context API simply deals with creating context , context means common storage to all the components 

### State management is problem in many libraries/framework 
Context API is state manager for react only 

There are other libraries for state-management like Redux , zustand which can be used with many libraries 

# Using context api 

```
    step 1 : Create a context in same or different file 
    
            import React, { createContext } from "react"

            const userTestContext = createContext()
            export default userTestContext 


    step2 : useContext provides a provider to wrap the components 
    - wrap the components inside the userTestContext.Provider and pass the value 
    - this value is generally passed as an object and the state variables/function inside value are accessible to all children 

    
            import React, { useState } from "react"
            import userTestContext from "./context/userContext"

            const UserContextProvider = ({children})=>{
                const [user , setUser] = useState(null)
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

    here children components has acces to value 
    - Quick look at the children 
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



    step 3 : to use the values provided by userTestContext.Provider 

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
```