import Title from "./title.jsx";
import Input from "./input.jsx";
import Option from "./options.jsx"
import { useEffect, useState , useRef} from "react";

export default function Container() {

    let [password , setPassword] = useState("hi")
    const [length , setLength] = useState(8)
    const [numAllowed , setNumAllowed] = useState(false)
    const [charAllowed , setCharAllowrd] = useState(false)
    let passwordRef = useRef(null)

    const handleCharAllowed = () =>{
        setCharAllowrd((prev)=> !prev)
        console.log(charAllowed)
    }
    const handleLengthChange = (e)=>{
        setLength(e.target.value)
    }
    const handleNumChange = ()=>{
        setNumAllowed((prev)=> !prev)
        console.log(numAllowed)
    }


    const passwordGenerator = () =>{
        let pass=""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let num="0123456789"
        let characters = "{!@$%^&*()_+}|:;'`?<>"
        
        for ( let i = 1 ; i <= length ; i++){
                if(numAllowed){
                    str += num 
                }
                if(charAllowed){
                    str += characters 
                }
                let randomIndex = Math.floor(Math.random()*str.length)
                pass = pass + str.charAt(randomIndex)
        }

        setPassword(pass)
    }

    useEffect(()=>{
        passwordGenerator()
    },[length,numAllowed,charAllowed])

    const copyPassword = ()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, 20);
        window.navigator.clipboard.writeText(password)
    }



  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      
      
      <Title content=" Strong Password generator " />
      <Input password={password} copyPassword={copyPassword} passwordRef={passwordRef}/>

      <Option length={length} handleLengthChange={handleLengthChange}
      numAllowed={numAllowed}
      handleNumChange={handleNumChange}
      charAllowed={charAllowed}
      handleCharAllowed={handleCharAllowed}
      />


    </div>
  );
}
