import React from 'react';
import './Location.css';

import MainCard from './MainCard';
import MainButtonFavorite from './MainButtonFavorite';
import MainButtonEdit from './MainButtonEdit';
import MainButtonDelete from './MainButtonDelete';

const LocationFav = (props) => {

    const handleEditButtonClickR = () => {
        props.handleEditButton(props.id, props.title, props.date, props.img, props.comment);
      };

    return (
        <MainCard>
            <ul key={props.id} className='unOrderList'>
                <div className='four-col-grid'>
                        <h1 className='title'>{props.title}</h1>
                        <h1>Date: {props.date}</h1>
                        <img src={props.img} className="location-img" alt={props.title}/>
                    <div>
                        <h1 className='comment'>Comment:</h1>
                        <p className='userComment'>{props.comment}</p>
                    </div>
                </div>
                <div className='button-flex'>
                {props.isLoggedIn &&
                    <MainButtonFavorite type="submit" className="favorite" onClick= {() => props.handleUnfavoriteButton(props.id)}>
                        Unfavorite
                    </MainButtonFavorite>
                }
                {props.isLoggedIn &&
                    <MainButtonEdit type="submit" onClick={handleEditButtonClickR}>Edit</MainButtonEdit>
                }
                {props.isLoggedIn &&
                    <MainButtonDelete type="submit" onClick= {() => props.handleRightDelete(props.id)}>Delete</MainButtonDelete>
                }
                </div>
            </ul>
        </MainCard>
    )
}

export default LocationFav;