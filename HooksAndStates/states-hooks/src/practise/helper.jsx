import React from "react";
import { useState } from "react";
import Container from "./container";

export default function Practise() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount((currVal) => {
      return currVal + 1;
    });
    setCount((currVal) => {
      return currVal + 1;
    });
    setCount(35);
  }
  return (
    <>
      <Container>
        <p>
          {" "}
          <b> Count is {count}</b>
        </p>
        <button onClick={increaseCount}> Increase count </button>
      </Container>

      <Container>
        
      </Container>
    </>
  );
}
