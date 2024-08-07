import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter  from './counter'
import LikeButton from "./likebtn"

function App(){
    let styles = {color : "red" }
    return (
        <>
            <h1 style={styles}>  States in react </h1>
            <Counter/>
            <LikeButton/>
        </>
    )
}

export default App 