import {createContext, ReactNode, useState } from "react";

const cartContext = createContext<{items: items, setItems: React.Dispatch<React.SetStateAction<items>>} | null>(null);


type item  = {
    productName : string,
    price : number  , 
    isAdded : boolean , 
}
type items = item[]
const initialItems : items = [
    {
        productName : "Macbook",
        price : 4000  , 
        isAdded : false 
    } , {
        productName : "Iphone",
        price : 100000 , 
        isAdded : false
    } , {
        productName : "Samsung",
        price : 10000 , 
        isAdded : false
    }
]

const CartContextProvider =  ({children} : {children: ReactNode}) => {
    const [items , setItems ] = useState(initialItems)
    return (
                <cartContext.Provider value={{items ,setItems}}>
                    {children}  
                </cartContext.Provider>
    )
}

export {CartContextProvider , cartContext}