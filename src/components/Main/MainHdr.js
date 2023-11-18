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
        {
            id:'loopy',
            title: "Kev Dawg",
            date: 21,
            img: 'https://pbs.twimg.com/profile_images/1370022873809645571/jo32MjlR_400x400.jpg',
            comment: 'Official dawg',
        },
        {
          id:'jeesus',
          title: 'GOD',
          date: 22,
          img: 'https://media.tenor.com/4ia58csaI_sAAAAM/cat-war.gif',
          comment: 'Chaos'
        }
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
            to='/add'
            >Add</Link>
            <Link 
            to='/edit'
            >Edit</Link>
            <h1>Welcome, User!</h1>
            <img src="src\components\Main\img\Toilet logo picture.jpg" alt="JOE BIDEN"></img>
                    <Link 
            to='/login'
            >Login</Link>
            </div>
            <MainLocationList locations={locationsList}/>
        </div>
    );
};

export default Hdr;