import { Link } from 'react-router-dom';
import myImage from './img/Toilet logo picture.jpg'; // Adjust the path to your image
import './MainHdrOut.css'; 
import MainLocationList from './MainLocationList';


const MainHdrOut = ({locations}) => {
    
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
      <MainLocationList loggedIn={false} locations={locations}/>
    </div>
  );
};

export default MainHdrOut;
