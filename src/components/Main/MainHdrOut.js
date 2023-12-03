import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from './img/Toilet logo picture.jpg'; // Adjust the path to your image
import './MainHdrOut.css'; 
import kevin from './img/kevin_restroom.jpg'
import MainLocationList from './MainLocationList';


const MainHdrOut = () => {
    
      const DUMMY_LOCATION = [
        {
          id: 'poopy',
          title: 'MLC Third Floor',
          date: '2023/2/12',
          img: 'https://thumbor.bigedition.com/funniest-cats-internet/IFuBq6cGzboq-79yUziXTZkYtw0=/0x13:800x614/480x360/filters:format(webp):quality(80)/granite-web-prod/cc/fa/ccfa37b8659442e9a994fe07d0534ac8.jpeg',
          comment: 'Computer Science',
          side: 'left',
        },
        {
            id:'loopy',
            title: "Pharmacy First Floor",
            date: '2023/6/8',
            img: 'https://pbs.twimg.com/profile_images/1370022873809645571/jo32MjlR_400x400.jpg',
            comment: 'Official dawg',
            side: 'right',
        },
        {
          id:'jeesus',
          title: 'Snelling Basement',
          date: '2023/4/9',
          img: 'https://media.tenor.com/4ia58csaI_sAAAAM/cat-war.gif',
          comment: 'Chaos',
          side: 'left',
        },
        {
          id: 'hoopy',
          title: 'Science Library 2nd Floor',
          date: '2023/11/30',
          img: kevin,
          comment: 'The second floor bathroom was very nice. I went to go use the bathroom but instead of finding an empty stall I found Kevin frolicking',
          side: 'right',
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
      <div className="MainHdrOut">
        <div>
        </div>
        <div className="MainHdrOutuser-info">
          <h1>RoyalFlushRealms! <img className="" src={myImage} alt="JOE BIDEN" /></h1>
          <div>
            <p>Your Domain is your conquer!</p>
          </div>
        </div>
          <Link to='/login'>
            <button className='MainHdrOutmy-button-logout'>Login</button>  
          </Link>
      </div>
      <MainLocationList loggedIn={false} locations={locationsList}/>
    </div>
  );
};

export default MainHdrOut;
