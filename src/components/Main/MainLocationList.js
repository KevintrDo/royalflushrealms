import React, { useState } from "react";
import MainCard from "./MainCard";
import Location from "./Location";
import './MainLocationList.css';
import LocationFav from "./LocationFav";

var MainLocationList = (props) => {
    const [leftColumnItems, setLeftColumnItems] = useState(props.locations);
    const [rightColumnItem, setRightColumnItem] = useState([]);

    const handleFavoriteButton = (itemID) => {
        const itemToMove = leftColumnItems.find((item) => item.id === itemID);
        if (itemToMove) {
            const updatedLeftColumnItems = leftColumnItems.filter((item) => item.id !== itemID);
            setLeftColumnItems(updatedLeftColumnItems);
            setRightColumnItem([...rightColumnItem, itemToMove]);
        }
    };

    const handleUnfavoriteButton = (itemID) => {
        const itemToMove = rightColumnItem.find((item) => item.id === itemID);
        if (itemToMove) {
            const updatedRightColumnItems = rightColumnItem.filter((item) => item.id !== itemID);
            setLeftColumnItems([...leftColumnItems, itemToMove]);
            setRightColumnItem(updatedRightColumnItems)
        }
    };

    return (
        <MainCard className="users">
            <ul>
                {leftColumnItems.map((location) => (
                    <Location
                        key={location.id}
                        img={location.img}
                        title={location.title}
                        date={location.date}
                        comment={location.comment}
                        handleFavoriteButton={() => handleFavoriteButton(location.id)} // Pass the correct itemID
                    />
                ))}
            </ul>
            <ul>
                {rightColumnItem.map((location) => (
                    <LocationFav
                        key={location.id}
                        img={location.img}
                        title={location.title}
                        date={location.date}
                        comment={location.comment}
                        handleUnfavoriteButton={() => handleUnfavoriteButton(location.id)}
                    />
                ))}
            </ul>
        </MainCard>
    );
};

export default MainLocationList;

