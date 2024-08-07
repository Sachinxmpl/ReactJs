//? The form components like input submit have their own internal state  , elements of form have thier own default behaviour

//? As a react developer we must have controlled components

//? the form components must be controlled by reat state rather than internal state

//? React state must be the single source of thruth

// In hmtl form elements such as input textarea select typically maintin their own state and update it based on user input . In react , mutable state is typically kept in the state property of compoenents and only updated with setState()

// we can combine the two by making the React state be the "single source of truth" . Then the react component  that render a form also control what happens in that form on subsequent user input . An input form element whose value is controlled by React in this way is called a controlled component

//* By setting value = {stateVariable} and invoking onchange mehtod we control the component

//* Suppose there are multiple components in a form like username , password , location then it will be tedious to define the function onchange again and again for each field

//* To solve this problem we create a common handleInputChnage() function

import { useState } from "react";

export default function Form() {
  let [input , setInput] = useState({
    userName : "" , 
    location : "" , 
    password : ""
  })

  const handleInputChange = (event) =>{
    setInput((input)=>{
          return {
            ...input , [event.target.name]:event.target.value
          }
    })
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    setInput({
      userName:"",
      location:"",
      password:""
    })
  }
  

  return (
    <form onSubmit={handleSubmit} >
      <div className="row">
        <label htmlFor="username">Username </label>
        <input
          type="text"
          value={input.userName}
          id="username"
          name="userName"
          placeholder="Enter username"
          onChange={handleInputChange}
        />
      </div>

      <div className="row">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          value={input.location}
          id="location"
          name="location"
          placeholder="Enter location"
          onChange={handleInputChange}
        />
      </div>

      <div className="row">
        <label htmlFor="password">password </label>
        <input
          type="password"
          value={input.password}
          id="password"
          name="password"
          placeholder="Enter password"
          onChange={handleInputChange}
        />
      </div>

      <button>Submit </button>
    </form>
  );
}
