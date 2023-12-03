import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Hdr from './components/Main/MainHdr';
import HdrOut from './components/Main/MainHdrOut';
import FormAdd from './components/Form/FormAdd'
import FormEdit from './components/Form/FormEdit'
import Login from './components/Login/Login'
import LoginCreate from './components/Login/LoginCreate'



const App = () => {

  return (
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
    
  );
}

export default App;
