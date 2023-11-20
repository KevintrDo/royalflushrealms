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
            console.log(itemID.column);
            const updatedLeftColumnItems = leftColumnItems.filter((item) => item.id !== itemID);
            setLeftColumnItems(updatedLeftColumnItems);
            setRightColumnItem([...rightColumnItem, itemToMove]);
        }
    };

    const handleLeftDelete = (itemID) => {
        const itemToMove = leftColumnItems.find((item) => item.id === itemID);
        if (itemToMove) {
            const updatedLeftColumnItems = leftColumnItems.filter((item) => item.id !== itemID);
            setLeftColumnItems(updatedLeftColumnItems);
        }
    }

    const handleRightDelete = (itemID) => {
        const itemToMove = rightColumnItem.find((item) => item.id === itemID);
        if (itemToMove) {
            const updatedRightColumnItems = rightColumnItem.filter((item) => item.id !== itemID);
            setRightColumnItem(updatedRightColumnItems);
        }
    }

    const handleUnfavoriteButton = (itemID) => {
        const itemToMove = rightColumnItem.find((item) => item.id === itemID);
        if (itemToMove) {
            const updatedRightColumnItems = rightColumnItem.filter((item) => item.id !== itemID);
            setLeftColumnItems([...leftColumnItems, itemToMove]);
            setRightColumnItem(updatedRightColumnItems)
        }
    };
    
    const[selectedLocation, setSelectedLocation] = useState(null);
    const[showEditForm, setShowEditForm] = useState(false);
    

    const handleEditButtonClick  = (location) => {
        setSelectedLocation(location);
        setShowEditForm(true);
        
    };

    const handleFormSubmit = (locationData) => {
        setLeftColumnItems((prevLeftColumnItems) => {
            return prevLeftColumnItems.map((location) =>
                location.id === selectedLocation.id ? { ...location, ...locationData } : location
            );
        });
        
    }

    const handleFormClose = () => {
        setShowEditForm(false);
        setSelectedLocation(null);
    };

    const handleEditButtonClickR  = (location) => {
        setSelectedLocation(location);
        setShowEditForm(true);
    };

    const handleFormSubmitR = (locationData) => {
        setRightColumnItem((prevRightColumnItems) => {
            return prevRightColumnItems.map((location) =>
                location.id === selectedLocation.id ? { ...location, ...locationData } : location
            );
        });
        
    }

    const handleFormCloseR = () => {
        setShowEditForm(false);
        setSelectedLocation(null);
    };

    


    return (
        <MainCard className="users">
            <ul>
                {leftColumnItems.map((location) => (
                    <Location
                        key={location.id}
                        {...console.log(location.id)}
                        img={location.img}
                        title={location.title}
                        date={location.date}
                        comment={location.comment}
                        handleFavoriteButton={() => handleFavoriteButton(location.id)} // Pass the correct itemID
                        handleLeftDelete={() => handleLeftDelete(location.id)}
                        isLoggedIn={props.loggedIn}
                        handleEditButton={() => handleEditButtonClick(location)}
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
                        handleRightDelete={() => handleRightDelete(location.id)}
                        handleEditButton={() => handleEditButtonClickR(location)}
                    />
                ))}
            </ul>

            {showEditForm && (
                <LocationForm
                onSubmit={handleFormSubmit}
                onClose={handleFormClose}
                selectedLocation={selectedLocation}
                />
            )}

            {showEditForm && (
                <LocationForm
                onSubmit={handleFormSubmitR}
                onClose={handleFormCloseR}
                selectedLocation={selectedLocation}
                />
            )}
        </MainCard>
    );
};

export default MainLocationList;

