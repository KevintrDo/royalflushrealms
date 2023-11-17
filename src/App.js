import React,  { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hdr from './components/Main/MainHdr';
import MainAddLocation from './components/Main/MainAddLocation';

function App() {
  return (
    <div>
      
      <Hdr/>
      <MainAddLocation/>
    </div>
  );
}

export default App;
