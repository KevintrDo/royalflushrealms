import React, {Component} from "react";
import MainCard from "./MainCard";
import Location from "./Location";
import './MainLocationList.css';
import {useState} from "react";
import MainButtonEdit from "./MainButtonEdit";
import MainButtonFavorite from "./MainButtonFavorite";

var MainLocationList = (props) => {

    const handleFavoriteButton = (itemID) => {
        const itemToMove = leftColumnItems.find((item) => item.id === itemID);
        if (itemToMove) {
            const updatedLeftColumnItems = leftColumnItems.filter((item) => item.id !== itemID);
    
            setLeftColmumnItems(updatedLeftColumnItems);
    
            setRightColumnItem([...setRightColumnItem, itemToMove]);
        }
    };

    const[leftColumnItems, setLeftColmumnItems] = useState(
            <ul>
                {props.locations.map((location) => (
                    <Location
                        key={location.id}
                        img={location.img}
                        title={location.title}
                        date={location.date}
                        comment={location.comment}
                        handleFavoriteButton={handleFavoriteButton}
                    />
                ))}
            </ul>
        );

    const[rightColumnItem, setRightColumnItem] = useState([])


    return (
        <mainCard className="users">
            <ul>
                {leftColumnItems}
            </ul>
            <ul>
                {rightColumnItem}
            </ul>
        </mainCard>
    )
}


export default MainLocationList;