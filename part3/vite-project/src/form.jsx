function handleForm(event){
    event.preventDefault() 
    console.log("form was submitted")
}

//! event.preventDefault prevents the default behaviour of form 

export default function Form(){
    return (
        <form onSubmit={handleForm}>
            <input placeholder="write something"></input>
            <br></br>
            <button> Submit </button>
        </form>
    )
} 