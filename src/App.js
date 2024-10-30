import React, { useContext, useState } from "react";
import ui,{b,a} from './module1.js';
import  Navbar from "./components/Navbar.js";
import  TextForms from "./components/TextForms.js";
import  About from "./components/About.js";
import "./style.css";
import Alert from "./components/Alert.js";
let name = "TextUtlils";

// import React from "react";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";



export default function App() {
  const toggleMood=()=>{
    if (mood == 'light') {
      setMood('dark')
      setText('Enable Light Mood')
      document.body.style.backgroundColor = 'gray';
      // textColor:'light';
      showAlert("Dark mode enabled","success")
    }
    else{
      setMood('light')
      setText('Enable Dark Mood')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success")
    }
  }

  const [mood,setMood] = useState('light')
  const [text,setText] = useState('Enable Dark Mood')
  const[alert,setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type:type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title = "Text Utils -- by Md Luman Sarkar" mode = {mood} toggleMood = {toggleMood} text = {text}/>
    <Alert alert = {alert}/>

    {/* <Switch>}
          <Route exact path="/About">
          {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          {/* </Route> */}
        {/* </Switch> */} 
        
        {/* // </Router> */}
        <About mode = {mood}/>
        <TextForms showAlert = {showAlert} mode = {mood} toggleMood = {toggleMood} heading = "Enter Your Text Here :"/>
        <p>copyright@ Md Luman Sarkar || 2024</p>

    </>
  );
}
