import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from './img/Toilet logo picture.jpg'; // Adjust the path to your image
import './MainHdr.css';
import MainLocationList from './MainLocationList';
import kevin from './img/kevin_restroom.jpg'


const MainHdr = () => {
    
      const DUMMY_LOCATION = [
        {
        id: 'poopy',
        title: 'MLC Third Floor',
        date: '2023/2/12',
        img: 'https://thumbor.bigedition.com/funniest-cats-internet/IFuBq6cGzboq-79yUziXTZkYtw0=/0x13:800x614/480x360/filters:format(webp):quality(80)/granite-web-prod/cc/fa/ccfa37b8659442e9a994fe07d0534ac8.jpeg',
        comment: 'Computer Science',
        },
        {
            id:'loopy',
            title: "Pharmacy First Floor",
            date: '2023/6/8',
            img: 'https://pbs.twimg.com/profile_images/1370022873809645571/jo32MjlR_400x400.jpg',
            comment: 'Official dawg',
        },
        {
          id:'jeesus',
          title: 'Snelling Basement',
          date: '2023/4/9',
          img: 'https://media.tenor.com/4ia58csaI_sAAAAM/cat-war.gif',
          comment: 'Chaos',
        },
        {
          id: 'hoopy',
          title: 'Science Library 2nd Floor',
          date: '2023/11/30',
          img: kevin,
          comment: 'The second floor bathroom was very nice. I went to go use the bathroom but instead of finding an empty stall I found Kevin frolicking'
        },
      ];
      
      const [locationsList, setUsers] = useState(DUMMY_LOCATION);
      const addLocationHandler = (user) => {
        setUsers((prevUsers) => {
          return [user, ...prevUsers];
        });
      };
  
      return (
      <div className='mainHdrOutBackground'>
        <div className="Mainhdr">
          <div className="MainHdrnav-links">
          <Link to="/add">
          <button className="MainHdrmy-button">
  
              ADD
            </button>
            </Link>
        
            </div>
            <div className="MainHdruser-info">
              <h1>Welcome, User! <img className="" src={myImage} alt="JOE BIDEN" /></h1>
              <div>
                <p>Your Domain is your conquer!</p>
              </div>
            </div>
          <Link to='/'>
            <button className='MainHdrmy-button-logout'>Logout</button>  
          </Link>
        </div>
      <MainLocationList loggedIn={true} locations={locationsList}/>
    </div>
  );
};
export default MainHdr;