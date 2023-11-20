import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from './img/Toilet logo picture.jpg'; // Adjust the path to your image
import './MainHdrOut.css'; // Import your CSS file
import MainLocationList from './MainLocationList';
import { useLocation } from 'react-router-dom';


const MainHdrOut = () => {
    
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
      var isLogged = false;
      const [locationsList, setUsers] = useState(DUMMY_LOCATION);
      const addLocationHandler = (user) => {
        setUsers((prevUsers) => {
          return [user, ...prevUsers];
        });
      };
  return (
    <div>
      <div className="hdrOut">
      <div></div>
        <div className="user-infoOut">
          
          <h1>Welcome, User! <img className="" src={myImage} alt="JOE BIDEN" /></h1>
          <div>
            <p>Your Domain is your conquer!</p>
          </div>
        </div>
        <Link to="/login" className="link-style">Login</Link>

      </div>
      <MainLocationList loggedIn={false} locations={locationsList}/>
    </div>
  );
};

export default MainHdrOut;