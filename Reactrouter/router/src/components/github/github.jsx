import React from "react";
import { useEffect, useState } from "react";



export default function Github() {

    let [data, setData] = useState([])
    useEffect(async () => {
        const res = await fetch("https://api.github.com/users/hiteshchaudary")
        const resJson = await res.json()
        setData(resJson)

    }, [])


    return (
        <div>
            <h1> Followers  : {data.followers}</h1>
        </div>
    )
}