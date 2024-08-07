import React from 'react'
import ReactDOM from 'react-dom/client'


function MyApp(){
  return (
    <h1> Welcome to Manual react JS</h1>
  )
}


let Manualelement = React.createElement(
  "a" , 
  {
    href : "https://google.com",
    target : "_blank"
  },
  "click me to visit google"
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <MyApp/>
  // MyApp()
  Manualelement
)
