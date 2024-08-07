import React from "react"
import { useParams } from "react-router-dom"

export default function User(){
    const {userid} = useParams()
    return (
        <>
            <div>
                <h1 className="bg-gray-200 p-4 text-3xl m-8"> User with user id  : { userid}</h1>
            </div>
        </>
    )
}