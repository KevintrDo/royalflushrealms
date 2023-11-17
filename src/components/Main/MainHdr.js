import MainLocationList from "./MainLocationList";
import React,  { useState } from 'react';
import {Link} from 'react-router-dom'

import './MainHdr.css';

const Hdr = () => {
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
            <div className="hdr">
            <Link 
            to='/login'
            >Login</Link>
            <Link 
            to='/add'
            >Add</Link>
            <Link 
            to='/edit'
            >Edit</Link>
                <h1>Welcome, Dani Davito Mark Grigsby Strazzerri the Third, of 
                    diabeto the ninth!</h1>
            </div>
            <MainLocationList locations={locationsList}/>
        </div>
    );
};

export default Hdr;