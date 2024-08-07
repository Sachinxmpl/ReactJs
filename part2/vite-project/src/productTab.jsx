import Product  from "./product"

function ProductTab(){

    let options2 = ["sachin","khatri","is","the","best"]
    let choice = {
        a : "sachin" , 
        b : "hari" 
    }
    return (
        <div>
            <Product title="Phone" price={500} features={options2} tips={choice} />
            <Product title="Laptop" price={40} features={["fast","furious","strength"]} />
            <Product title="Television" price={4000} features={options2} />
            <Product title="Bluetooth" features={options2} />
        </div>
    )
}
export default ProductTab 