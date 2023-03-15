import React from "react";

export default function Joke(props) {

    const [ans , showanswer] = React.useState()

    function show() {
        showanswer(props.answer)
        
    }

    
    

    return (
        <div className="container">
           <label>Joke : <p>{props.question}</p> </label> 
           <label>Ans : <p>{ans}</p> </label>
           <button onClick={show}>{showanswer ? "Hide" : "Show"} Answer</button>
        </div>
    )
}