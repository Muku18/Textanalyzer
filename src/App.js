import './App.css';
import Navbar from './Components/Navbar';   
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
// "#212529"


function App() {
  const [mode, setmode] = useState('light')
  const toggleMode = () => {
    if(mode === 'light')
    {
      setmode('dark')
      document.body.style.backgroundColor = "#16232f";
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = "white";
    }
  }
  return (

    <div>
      <Navbar title="Textutils" mode  = {mode} togglemode = {toggleMode}></Navbar>
      <div className = "container my-3">
        <TextForm heading = "Text Analyzer" mode = {mode}></TextForm>
      </div>
      
    </div>

  );
}

export default App;
