import styles from "./Buttons.module.css";
import { useState } from "react";

let buttonsitems = [
  "C",
  "Del",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];

const numArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "+",
  "/",
  ".",
  "*"
];

export default function Buttons({onButtonClick}) {
    
  return (
    <div className={styles.container}>
      {buttonsitems.map((button) => {
        return (
          <button
            key={button}
            onClick={(event) => {
              if (numArray.indexOf(button) != -1) {
                return onButtonClick[0](event);
              } else {
                return onButtonClick[1](event);
              }
            }}
          >
            {" "}
            {button}
          </button>
        );
      })}
    </div>
  );
}
