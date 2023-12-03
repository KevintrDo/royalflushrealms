import { Link } from 'react-router-dom';
import myImage from './img/Toilet logo picture.jpg'; // Adjust the path to your image
import './MainHdr.css';
import MainLocationList from './MainLocationList';

const MainHdr = ({locations}) => {
  
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
      <MainLocationList loggedIn={true} locations={locations}/>
    </div>
  );
};
export default MainHdr;