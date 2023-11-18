import React, { useState } from "react";
import MainCard from "./MainCard";
import Location from "./Location";
import './MainLocationList.css';
import MainButtonEdit from "./MainButtonEdit";
import MainButtonFavorite from "./MainButtonFavorite";

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
                    <Location
                        key={location.id}
                        img={location.img}
                        title={location.title}
                        date={location.date}
                        comment={location.comment}
                    />
                ))}
            </ul>
        </MainCard>
    );
};

export default MainLocationList;

