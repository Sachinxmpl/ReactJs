import { useState , useEffect, PureComponent } from "react";

export default function Joke(){

    const generatorJoke = async() =>{
        let response = await fetch("https://official-joke-api.appspot.com/random_joke")
        let resposeJson = await response.json()
        setJoke({
            setup : resposeJson.setup,
            punchline : resposeJson.punchline
        })
    }

    // let [joke , setJoke] = useState(generatorJoke)

    let [joke , setJoke] = useState({})

    useEffect(()=>{
        generatorJoke()
    },[])


    return (
        <>
            <h2> Joke </h2>
            {
                (joke.setup && joke.punchline) && <div className="jokecontainer">
                        <p> {joke.setup}</p>
                        <p> {joke.punchline}</p>
                </div>
            }
            <button onClick={generatorJoke}> New Joke </button>
        </>
    )
}