import Container from "./Container"
import Title from "./Title"
import Display from "./Display"
import Buttons from "./Buttons"
import { useState } from "react"

export default function App(){
    let [display , setDisplay] = useState("")
    const onNormalClick = (event) =>{
        const val = [display ,  event.target.innerText].join('')
        setDisplay(val)
    }

    const specialClick = (event)=>{
        let value = event.target.innerText
        if (value == "="){
            setDisplay(eval(display))
        }
        if(value == "C"){
            setDisplay("")
        }
        if(value == "Del"){
          let arr = [...display]
          arr.splice(-1 , 1)
          let ans =""
          for ( let val of arr){
                ans += val ;       
          }
          setDisplay(ans)
        }
    }

    return (
        <>
            <Title/>
            <Container>
                <Display display={display}/>
                <Buttons onButtonClick={[onNormalClick , specialClick]}/>
            </Container>
        </>

    )
}