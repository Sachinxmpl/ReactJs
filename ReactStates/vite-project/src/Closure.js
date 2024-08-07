function outer(){
    let b = 10 ; 
    function inner(){
        let a = 20 ; 
        console.log(a+b)
    }
    return  inner() ; 
}
let inner = outer()
inner()