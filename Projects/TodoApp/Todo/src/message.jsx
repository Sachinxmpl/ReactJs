import { useContext } from "react"
import TodoItemsContext from "./store/todo-item-store"

export default function CompletionMessage (){
    const {todoTask} = useContext(TodoItemsContext)
    const styles = {
        textAlign : "center" , 
        marginTop : "25px" , 
        fontSize  : "28px"
    }
    return (
        <>
            {
                todoTask.length === 0 && <h3 style = {styles }> Enjoy Your Day </h3>
            }
        </>
    )
}