import React from 'react';
import './Location.css';

import MainCard from './MainCard';

const Location = (props) => {
    return (
        <MainCard>
            <ul key={props.id}>
                <div>
                    <h1>{props.title}</h1>
                    <h1>Date: {props.date}</h1>
                </div>
                <img src={props.img} className="location-img" alt={props.title}/>
                <div>
                    <h1>Comment: {props.comment}</h1>
                </div>
            </ul>
        </MainCard>
    )
}

export default Location