import React from "react"
import ReactDOM from "react-dom"
import MyComponent from "./MyComponent"
import ClipboardComponent from "./ClipboardComponent"


ReactDOM.render(
  <React.StrictMode>
    <p className="lastAnswer">(Antwort aus dem Chat)</p>
    <ClipboardComponent cssSelector=".lastAnswer" />
    <MyComponent />
  </React.StrictMode>,
  document.getElementById("root")
)
