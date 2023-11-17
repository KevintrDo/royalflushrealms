import React,  { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hdr from './components/Main/MainHdr';
import MainAddLocation from './components/Main/MainAddLocation';
import MainLocationList from './components/Main/MainLocationList';

function App() {

  const DUMMY_LOCATION = [
    {
    id: 'poopy',
    title: 'Daniel Grigsby',
    date: 20,
    img: 'https://thumbor.bigedition.com/funniest-cats-internet/IFuBq6cGzboq-79yUziXTZkYtw0=/0x13:800x614/480x360/filters:format(webp):quality(80)/granite-web-prod/cc/fa/ccfa37b8659442e9a994fe07d0534ac8.jpeg',
    comment: 'Computer Science',
    },
  ];
  const [locationsList, setUsers] = useState(DUMMY_LOCATION);
  const addLocationHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };
  return (

    <div>
      
      <Hdr/>
      {/* <MainAddLocation onAddLocation={addLocationHandler}/> */}
      <MainLocationList locations={locationsList}/>
    </div>
  );
}

export default App;
