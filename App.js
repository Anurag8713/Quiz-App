import React from "react";
import Joke from "./Joke";

export default function App() {
  return (
    <div>
      <Joke 
        question = "Name the kind of tree you can hold in your hand?"
        answer = "A palm tree!"
      />
      <Joke 
        question = "What has ears but cannot hear?"
        answer = "A cornfield."
      />
      <Joke 
        question = "What's a cat's favourite dessert?"
        answer = "A bowl full of mice-cream."
      />
      <Joke
        question = "What did the policeman say to his hungry stomach?"
        answer = "Freeze. You’re under a vest."
       />
    </div>
  )
}