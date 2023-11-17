import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React,  { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hdr from './components/Main/MainHdr';
import MainLocationList from './components/Main/MainLocationList';
import LoginCard from './components/Login/LoginCard';
import FormAdd from './components/Form/FormAdd'
import FormEdit from './components/Form/FormEdit'
import Login from './components/Login/Login'
import LoginCreate from './components/Login/LoginCreate'


function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Hdr/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Login/>} />
          <Route path='/signup' element={<LoginCreate/>} />
          <Route path='/edit' element={<FormEdit/>} />
          <Route path='/add' element={<FormAdd/>} />
          <Route path='/home' element={<Hdr/>} />
          {/* <Hdr/>
          <LoginCard/>
          <MainLocationList locations={locationsList}/> */}
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
