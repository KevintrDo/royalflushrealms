import React from 'react';
import './Location.css';

import MainCard from './MainCard';
import MainButtonFavorite from './MainButtonFavorite';
import MainButtonEdit from './MainButtonEdit';
import MainButtonDelete from './MainButtonDelete';

const LocationFav = (props) => {

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
                    <MainButtonFavorite type="submit" className="favorite" onClick= {() => props.handleUnfavoriteButton(props.id)}>
                        Unfavorite
                    </MainButtonFavorite>
                    <MainButtonEdit type="submit">Edit</MainButtonEdit>
                    <MainButtonDelete type="submit" onClick= {() => props.handleRightDelete(props.id)}>Delete</MainButtonDelete>
                </div>
            </ul>
        </MainCard>
    )
}

export default LocationFav;