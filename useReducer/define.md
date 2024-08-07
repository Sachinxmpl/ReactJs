### UseReducer hook is similar to the useState hook 
If your project has multiple states then better to go with useReducer rather than repetitive useState

```
useReducer accets two arguments 
const [state , dispatch] = useReducer(reducerFunction , initialstate )

initialstate passed is assigned to state 
Reducer function takes two arguments 

Action object has type based on which reducer function returns updates state

function reducerFunction(state , action){
    if(action.type === "increment"){
        return state + 1 
    }
    else{
        return state - 1 
    }
}


<button onClick={()=>dispatch({type : "increment"})}>Increament</button>

<button onClick={()=>dispatch({type : "decrement"})}>decrement</button>

```