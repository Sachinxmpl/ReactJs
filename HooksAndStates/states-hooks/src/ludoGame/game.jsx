import React from "react";
import { useState } from "react";

export default function LudoBoard() {
  let [arr, setArr] = useState(["nomoves"]);
  let [moves, setMoves] = useState({
    blue: 0,
    red: 0,
    yellow: 0,
    green: 0,
  });

  function updateBlue() {
    moves.blue += 1;
    setMoves({ ...moves });

    //* arrays
    //* same problem no new array same array only values changed so react doesnot rerender
    // arr.push("blue moves")
    // setArr(arr)
    // console.log(arr)
    setArr([...arr, "blue moves"]);
  }
  
  function updateRed() {
    setMoves({ ...moves, red: moves.red + 1 });
    setMoves({ ...moves, red: moves.red + 1 }); // will be updated just once
  }

  function updateYellow() {
    setMoves((moves) => {
      return { ...moves, yellow: moves.yellow + 1 };
    });

    setMoves((moves) => {
      return { ...moves, yellow: moves.yellow + 1 };
    });

    //! will be updated twice
  }

  return (
    <div className="container">
      <h1>Game Begins </h1>
      <h2>
        {arr.map((val) => {
          return <li> {val} </li>;
        })}
      </h2>
      <div className="board">
        <p> Blue Moves = {moves.blue} </p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          {" "}
          +1{" "}
        </button>
        <p> Red Moves = {moves.red} </p>
        <button onClick={updateRed} style={{ backgroundColor: "red" }}>
          {" "}
          +1{" "}
        </button>
        <p> Yellow Moves = {moves.yellow}</p>
        <button onClick={updateYellow} style={{ backgroundColor: "yellow" }}>
          {" "}
          +1{" "}
        </button>
        <p> Green Moves = {moves.green} </p>
        <button style={{ backgroundColor: "green" }}> +1 </button>
      </div>
    </div>
  );
}
