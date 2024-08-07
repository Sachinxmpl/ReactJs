function Product({title , price=20 , features , tips = {}}){
  
    const list = features.map((feature)=> <li>{feature}</li>)  

    let styles = { backgroundColor : "blue"}
    let color = { color : price>100 ? "red" : null}
    return (
        <div  className="Product" style={color} >
            <h4> {title}</h4>
            <p> {price+2} </p>
            {
               price>100 && <p> Discount is allowed</p>
            }
            <p> {list}</p>
            <p> {tips.a}</p>   
        </div>
    )
}

export default Product ; 