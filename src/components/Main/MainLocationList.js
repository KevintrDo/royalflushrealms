import React, { useState } from "react";
import MainCard from "./MainCard";
import Location from "./Location";
import './MainLocationList.css';
import LocationFav from "./LocationFav";
import LocationForm from "./LocationForm";

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
    

    const[showEditForm, setShowEditForm] = useState(false);
    

    const handleEditButtonClick  = (id, title, date, img, comment) => {
        console.log("Edit button clicked:", id, title, date, img, comment);
        setShowEditForm(true);
    };

    const handleFormSubmit = (locationData) => {
        console.log('Form submitted:', locationData);
    }

    const handleFormClose = () => {
        console.log("DON'T DOO IT");
        setShowEditForm(false);
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
                        handleEditButton={handleEditButtonClick}
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

            {showEditForm && (
                <LocationForm
                onSubmit={handleFormSubmit}
                onClose={handleFormClose}
                />
            )}
        </MainCard>
    );
};

export default MainLocationList;

