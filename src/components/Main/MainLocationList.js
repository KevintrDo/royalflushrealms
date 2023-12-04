import React, { useState, useEffect } from "react";
import MainCard from "./MainCard";
import Location from "./Location";
import './MainLocationList.css';
import LocationFav from "./LocationFav";
import LocationForm from "./LocationForm";
import LocationFormR from "./LocationFormR";


var MainLocationList = (props) => {
    const [leftColumnItems, setLeftColumnItems] = useState([]);
    const [rightColumnItem, setRightColumnItem] = useState([]);

    useEffect(() => {
        // Filter locations based on the side prop
        const leftItems = props.locations.filter(location => location.side === 'left');
        const rightItems = props.locations.filter(location => location.side === 'right');

        setLeftColumnItems(leftItems);
        setRightColumnItem(rightItems);
    }, [props.locations]);

    const handleFavoriteButton = (itemID) => {
        const itemToMove = leftColumnItems.find((item) => item.itemKey === itemID);
        if (itemToMove) {
            const updatedLeftColumnItems = leftColumnItems.filter((item) => item.itemKey !== itemID);
            setLeftColumnItems(updatedLeftColumnItems);
            setRightColumnItem([...rightColumnItem, itemToMove]);
        }
    };

    const handleLeftDelete = (itemID) => {
        const itemToMove = leftColumnItems.find((item) => item.itemKey === itemID);
        if (itemToMove) {
            const updatedLeftColumnItems = leftColumnItems.filter((item) => item.itemKey !== itemID);
            setLeftColumnItems(updatedLeftColumnItems);
        }
    }

    const handleRightDelete = (itemID) => {
        const itemToMove = rightColumnItem.find((item) => item.itemKey === itemID);
        if (itemToMove) {
            const updatedRightColumnItems = rightColumnItem.filter((item) => item.itemKey !== itemID);
            setRightColumnItem(updatedRightColumnItems);
        }
    }

    const handleUnfavoriteButton = (itemID) => {
        const itemToMove = rightColumnItem.find((item) => item.itemKey === itemID);
        if (itemToMove) {
            const updatedRightColumnItems = rightColumnItem.filter((item) => item.itemKey !== itemID);
            setLeftColumnItems([...leftColumnItems, itemToMove]);
            setRightColumnItem(updatedRightColumnItems)
        }
    };
    
    const[selectedLocation, setSelectedLocation] = useState(null);
    const[showEditForm, setShowEditForm] = useState(false);
    const[showEditFormR, setShowEditFormR] = useState(false);
    

    const handleEditButtonClick  = (location) => {
        setSelectedLocation(location);
        setShowEditForm(true);
    };

    const handleFormSubmit = (locationData) => {
        setLeftColumnItems((prevLeftColumnItems) => {
            return prevLeftColumnItems.map((location) =>
                location.itemKey === selectedLocation.itemKey ? { ...location, ...locationData } : location
            );
        });
    }

    const handleFormClose = () => {
        setShowEditForm(false);
        setSelectedLocation(null);
    };

    const handleEditButtonClickR  = (location) => {
        setSelectedLocation(location);
        setShowEditFormR(true);
    };

    const handleFormSubmitR = (locationData) => {
        setRightColumnItem((prevRightColumnItems) => {
            return prevRightColumnItems.map((location) =>
                location.itemKey === selectedLocation.itemKey ? { ...location, ...locationData } : location
            );
        });
        
    }

    const handleFormCloseR = () => {
        setShowEditFormR(false);
        setSelectedLocation(null);
    };


    return (
        <MainCard className="users">
            <ul>
                <div className='box-contain'>
                <h4 className='rec-fav'>Recents</h4>
                </div>
                {leftColumnItems.map((location) => (
                    <Location
                        key={location.itemKey}
                        img={location.img}
                        title={location.title}
                        date={location.date}
                        comment={location.comment}
                        handleFavoriteButton={() => handleFavoriteButton(location.itemKey)} // Pass the correct itemID
                        handleLeftDelete={() => handleLeftDelete(location.itemKey)}
                        isLoggedIn={props.loggedIn}
                        handleEditButton={() => handleEditButtonClick(location)}
                    />
                ))}
            </ul>
            <ul>
            <div className='box-contain'>
                <h4 className='rec-fav'>Favorites</h4>
                </div>
                {rightColumnItem.map((location) => (
                    <LocationFav
                        key={location.itemKey}
                        img={location.img}
                        title={location.title}
                        date={location.date}
                        comment={location.comment}
                        handleUnfavoriteButton={() => handleUnfavoriteButton(location.itemKey)}
                        handleRightDelete={() => handleRightDelete(location.itemKey)}
                        isLoggedIn={props.loggedIn}
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

            {showEditFormR && (
                <LocationFormR
                onSubmit={handleFormSubmitR}
                onClose={handleFormCloseR}
                selectedLocation={selectedLocation}
                />
            )}
        </MainCard>
    );
};

export default MainLocationList;

