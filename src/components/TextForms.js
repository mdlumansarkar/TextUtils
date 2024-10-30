import { useState } from "react"
import App from "../App";
import Navbar from "./Navbar";

const TextForms = (props) => {
  const handleClickUp = () => {
    console.log("Uppercase was clicked!");
    let setText = text.toUpperCase();
    newText(setText);
    if (newText != null) {
      props.showAlert("Converted it to uppercase!","success")
    }
    else {props.showAlert("no value here.","ddd")}
    // text.toUpperCase;

  }

  const handleClickLo = () => {
    console.log("Lower Clicked!");
    let setText = text.toLocaleLowerCase();
    newText(setText);
    props.showAlert("Converted it to Lower Case!","success")
  }

  const handleOnChange = (event) => {
    console.log("On change Clicked!");
    newText(event.target.value)

  }

  const [text, newText] = useState('What is your name?');


  return (
    <>
      <div>
        <div  className="mb-3 container">
          <label for="myBox" className="form-label"><h2>{props.heading}</h2></label>
          <textarea style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'grey'}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
          <button disabled = {text.length ===0} className="btn btn-primary my-3" onClick={handleClickUp}>Convert to Uppercase</button>
          <button disabled = {text.length ===0} className="btn btn-danger my-3 mx-3" onClick={handleClickLo}>Convert To Lowercase</button>

        </div>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>You Type {text.split(" ").filter((element)=>{element.length!==0}).length} words and {text.length} characters</p>
        <p>You need to take time to read this {text.length*0.004} minutes</p>
        <p>your text here : <br/>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>

  )
}

export default TextForms