import React from 'react';
import './Location.css';

import MainCard from './MainCard';
import MainButtonFavorite from './MainButtonFavorite';
import MainButtonEdit from './MainButtonEdit';

const Location = (props) => {

    const handleEditButtonClick = () => {
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
                    <MainButtonFavorite type="submit" onClick= {() => props.handleFavoriteButton(props.id)}>
                        Favorite
                    </MainButtonFavorite>
                    <MainButtonEdit type="submit" onClick={handleEditButtonClick}>Edit</MainButtonEdit>
                </div>
            </ul>
        </MainCard>
    )
}

export default Location