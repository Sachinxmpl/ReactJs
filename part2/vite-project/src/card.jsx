import "./card.css"
import Price from "./price.jsx"
import Title from "./Title.jsx"


function Description({description}){
    return(
        <>
            <p> {description}</p>
        </>
    )
}

function Item({title , index }){
    let oldprice = ["12,495","34,234","34,324","34,343"]
    let newprice = ["6,495","4,234","3,324","1,343"]
    let des = ["Best 2024 keyboard" , "Laptop hot deals" , "Computer are different" , "Enjoy the 3D game "]
    return(
        <div className="item">
            <Title title={title}/>
            <Description description={des[index]} />
            <Price oldprice={oldprice[index]} newprice={newprice[index]}/>
        </div>
    )
}


export default function Card(){
    return (
        <div className="container">
            <Item title="Keyboard" index={0}/>
            <Item title="Laptop" index={1}/>
            <Item title="Computer" index={2}/>
            <Item title='CallOfDuty' index={3}/>
            
        </div>
    )
}