import React,  { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hdr from './components/Main/MainHdr';
import MainAddUser from './components/Main/MainAddUser';

function App() {
  return (
    <div>
      <Hdr/>
      <MainAddUser/>
    </div>
  );
}

export default App;
