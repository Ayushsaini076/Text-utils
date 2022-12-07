
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form'
import React, { useState } from 'react';
import Alert from './components/Alert'
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

let name= "Ayush";
function App() {
  const [mode,setMode] = useState('light');
  //whether dark mode is enabled or not
  const  [alert,setAlert] = useState(null);
 
  const showAlert = (message,type)=>{
    setAlert({
        msg:message,
        type:type,
    })
   
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ='grey'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
{/* <Router> */}
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
{/* <Navbar /> */}
<Alert alert={alert}/>
{/* {<Routes> */}
          {/* <Route path="/about" element={<About/>}/>
           
         
          <Route path="/"> */}
          <Form showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
           
          {/* </Route> */}
        {/* </Routes> */} 
 
{/* <Form showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/> */}
{/* <About/> */}
{/* </Router> */}
    </>
    
  );
  }

export default App;
