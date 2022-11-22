
import React, { useState } from 'react';
import './App.css';
import About from './COMPONENTS/About';
import Navbar from './COMPONENTS/Navbar';
import TextForm from './COMPONENTS/TextForm';
import Alert from './COMPONENTS/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
    setInterval(() => {
      document.title = 'Text UTil is Great';

    }, 2000);
    // setInterval(()=>{
    //   document.title=' Download Text UTil ';

    // },1500);
  }
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')


  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#181828"
      showAlert("Dark Mode Has Been Enable", "success")
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Has Been Enable", "success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode} About="About" Home="Home"/>
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            
            <Route exact path="/Home" element={ <TextForm showAlert={showAlert} heading="Enter Text Area Below" mode={mode} />}>
            
            </Route>
            
              <Route exact path="/About"  element={ <About />}>
             
            </Route>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
