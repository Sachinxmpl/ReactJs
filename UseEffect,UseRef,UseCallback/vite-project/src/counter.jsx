//? The useEffect hook is used to perform any operations while react renders the page 
//? useEffect(function , dependencies)
//? Function consists the task to be performed while rendering 
//? we can also pass some dependencies which is simply and array of state variables 
//? [] if we pass empty array as an dependency then , the useEffect hook is executed for the first rendering only ( no change in any state varible will trigger the useEffect)
//? if we pass no dependency then the useEffect hook will be executed on every change in state variable(react re-renders)
//? if we pass pass [count,count2]  use Effect hook will be executed on change of count and count2 state variable 
//? if we pass [count] useEffect hook will be excuted on change of count hook only 






//! Use Ref hook 
//* Suppose you declare a variable a = 10 and update it onClick a = a+ 1  and console.log(a)
//* Now we expect the value of to be 0 1 then 2 , 3 and so on 
//* But when react re-renders the value of a is again initialized to 0 
//* to after updation the value of a will be 1 
//* To output will be 1 , 1, 1 ..
//* To prevent this and make that the variable a donot re-initailize useRef helps 
//* Declare a = useRef(0)
//* update current value , a.current = a.current + 1 







import { useState , useEffect , useRef} from "react";

export default function Counter(){

    let a = useRef(0)

    let [count , setCount] = useState(0)
    let [count2 , setCount2] = useState(0)
    function increaseCount(){
        a.current = a.current + 1 ;
        console.log(a)
        setCount(count+1)
    }
    function increaseCount2(){
        setCount2(count2+1)
    }

    //* Executed every time react re-renders (change in state varibale)
    // useEffect(function sideEffect(){
    //     console.log("this is side effect")
    // })


    //* Executed on first render only
    // useEffect(function sideEffect(){
    //     console.log("this is side effect")
    // },[])

    //* Executed if only change in count (state variable ) but not count2
    // useEffect(function sideEffect(){
    //     console.log("this is side effect")
    // } , [count])


    //* Executed both change in count and count2 (state variable )
    // useEffect(function sideEffect(){
    //     console.log("this is side effect")
    // } , [count , count2])


    //*Return function in useEffect 
    //* return functions runs only when the component is removed ie unmounted 

    // useEffect(()=>{
    //     alert("Chekcing the returrn statement")
    // }
    // return ()=>{
    //     alert("Componenet was unmounted"),
    // }
    // ,[])



    return (
        <>
            <p> Count = {count }</p>
            <button onClick={increaseCount}>+1</button>
            
            <p> Count = {count2}</p>
            <button onClick={increaseCount2}>+1</button>
        </>
    )
}