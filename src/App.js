import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Hdr from './components/Main/MainHdr';
import HdrOut from './components/Main/MainHdrOut';
import FormAdd from './components/Form/FormAdd'
import FormEdit from './components/Form/FormEdit'
import Login from './components/Login/Login'
import LoginCreate from './components/Login/LoginCreate'
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
  return (
    <UserContext.Provider value={{userData, setUserData}}>
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<HdrOut/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Login/>} />
          <Route path='/signup' element={<LoginCreate/>} />
          <Route path='/edit' element={<FormEdit/>} />
          <Route path='/add' element={<FormAdd/>} />
          <Route path='/home' element={<Hdr/>} />
          <Route path='/homeOut' element={<HdrOut/>} />

          {/* <Hdr/>
          <LoginCard/>
          <MainLocationList locations={locationsList}/> */}
        </Routes>
      </div>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;
