function doSomething(event){
    console.log(event)
    //? we can access th event object 
    console.log(event.target)
    console.log("react even listern ")
}
function doNothing(){
    console.log('someone just hovered me ')
}

export default function Button(){
    return ( 
        <div>
            <button onClick={doSomething} > Click Me</button>
            <p onMouseOver={doNothing}> This is to check the mouseover event in reat </p>
        </div>
    )
}