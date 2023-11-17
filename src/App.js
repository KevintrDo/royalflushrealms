import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React,  { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hdr from './components/Main/MainHdr';
import MainLocationList from './components/Main/MainLocationList';
import LoginCard from './components/Login/LoginCard';

function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Hdr/>} />
          <Route path='/login' element={<LoginCard/>} />
          {/* <Hdr/>
          <LoginCard/>
          <MainLocationList locations={locationsList}/> */}
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
