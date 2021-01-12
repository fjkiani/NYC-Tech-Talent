import logo from './logo.svg';
import FinishedForm1 from "./Components/FinishedForm1"
import FinishedForm2 from "./Components/FinishedForm2"
import StarterForm from "./Components/StarterForm"
import StarterForm2 from "./Components/StarterForm2"

import './App.css';
import React, {Component} from "react"




export default function App() {
  return (
    <div>
      {/* <Form1/> */}
      {/* <FinishedForm2/> */}
      {/* <StarterForm/> */}
      <StarterForm2/>
    </div>
  )
}


//Intro notes:
//HTML forms vs React
//HTML processes the form till the very end upon hitting submit 
//React capture input of each stroke