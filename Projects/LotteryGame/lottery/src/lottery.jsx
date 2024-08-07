import React from "react"
import { useState } from "react"

export default function Lotter({number , message  , playGame}){
    return (
        <div className="container">
            <h3> {message}</h3>
            <p> Lottery Ticket = {number}</p>
            <button onClick={playGame} > Get New Ticket </button>
        </div>
    )
}