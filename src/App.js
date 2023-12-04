import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Hdr from './components/Main/MainHdr';
import HdrOut from './components/Main/MainHdrOut';
import FormAdd from './components/Form/FormAdd'
import Login from './components/Login/Login'
import LoginCreate from './components/Login/LoginCreate'
import kevin from './components/Main/img/kevin_restroom.jpg'
import axios from "axios";
import {useState, useEffect} from 'react';
import UserContext from './context/UserContext'



const App = () => {
  
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post("http://localhost:4000/api/users/tokenIsValid",
      null,
      { headers: {"x-auth-token": token}}
      );
    if (tokenResponse.data) {
      const userRes = await axios.get("http://localhost:4000/api/users/", {
        headers: { "x-auth-token": token},
      });
      setUserData({
        token,
        user: userRes.data,
      });
    }
  };
  checkLoggedIn();
}, []);

  const DUMMY_LOCATION = [
    {
     id: 'poopy',
     title: 'MLC Third Floor',
      date: new Date('2023/2/12').toLocaleDateString(),
    img: 'https://thumbor.bigedition.com/funniest-cats-internet/IFuBq6cGzboq-79yUziXTZkYtw0=/0x13:800x614/480x360/filters:format(webp):quality(80)/granite-web-prod/cc/fa/ccfa37b8659442e9a994fe07d0534ac8.jpeg',
     comment: 'Computer Science',
     side: 'left',
    },
  {
     id:'loopy',
      title: "Pharmacy First Floor",
      date: new Date('2023/6/8').toLocaleDateString(),
      img: 'https://pbs.twimg.com/profile_images/1370022873809645571/jo32MjlR_400x400.jpg',
     comment: 'Official dawg',
     side: 'right',
      },
      {
      id:'jeesus',
       title: 'Snelling Basement',
        date: new Date('2023/4/9').toLocaleDateString(),
        img: 'https://media.tenor.com/4ia58csaI_sAAAAM/cat-war.gif',
     comment: 'Chaos',
     side: 'left'
      },
      {
      id: 'hoopy',
      title: 'Science Library 2nd Floor',
      date: new Date('2023/11/30').toLocaleDateString(),
      img: kevin,
      comment: 'The second floor bathroom was very nice. I went to go use the bathroom but instead of finding an empty stall I found Kevin frolicking',
      side: 'right',
     },
    ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/bathrooms/');
        setLocationsList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [locationsList, setLocationsList] = useState(DUMMY_LOCATION); // Your initial dummy locations

  const addLocationHandler = (newLocation) => {
    setLocationsList((prevLocations) => [newLocation, ...prevLocations]);
  };

  return (
    <UserContext.Provider value={{userData, setUserData}}>
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<HdrOut locations={locationsList}/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Login/>} />
          <Route path='/signup' element={<LoginCreate/>} />
          <Route path='/add' element={<FormAdd onAddLocation={addLocationHandler}/>}/>
          <Route path='/home'element={<Hdr locations={locationsList}/>}/>
          <Route path='/homeOut' element={<HdrOut locations={DUMMY_LOCATION}/>} />
        </Routes>
      </div>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;
