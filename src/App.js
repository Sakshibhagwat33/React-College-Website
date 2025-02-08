/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> /}
      <h1>hello</h1>
      <form>
        <label htmlFor='firstname'>firstname</label>
        <input type='text'/><br/>
        <label htmlFor='lastname'>lastname</label>
        <input type='text'/><br></br>
        <input type="submit" value="sumit"/>
        
      </form>
    </div>
  );
}

export default App;
*/


import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from  "./pages/Home.js";
import About from "./pages/About.js";
import Admissions from "./pages/Admissions";
import AcademicProgram from "./pages/AcademicProgram.js";
import CampusLife from "./pages/CampusLife.js";
import EventsAndNews from "./pages/EventsAndNews.js";
import Contactus from "./pages/Contactus.js";
import Alumni from "./pages/Alumni.js";
import Login from "./pages/Login.js";






function App() {
  console.log("App component rendered.");
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/programs" element={<AcademicProgram />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/news" element={<EventsAndNews />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/login" element={<Login />} />
     
       
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;