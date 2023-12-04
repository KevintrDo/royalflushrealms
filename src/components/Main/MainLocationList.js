import React, { useState, useEffect } from "react";
import MainCard from "./MainCard";
import Location from "./Location";
import './MainLocationList.css';
import LocationFav from "./LocationFav";
import LocationForm from "./LocationForm";
import LocationFormR from "./LocationFormR";
import axios from "axios";


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
    

const handleFavoriteButton = async (itemID) => {

    const itemToMove = leftColumnItems.find((item) => item.id === itemID);
        if (itemToMove) {
            const update = { side: 'right' };
            await axios.put(`//localhost:4000/api/bathrooms/${itemToMove._id}`, update)
            .then((response) => {
                const updatedLeftColumnItems = leftColumnItems.filter((item) => item._id !== itemToMove._id);
                setLeftColumnItems(updatedLeftColumnItems);
                setRightColumnItem([...rightColumnItem, itemToMove]);
            })
            .catch((error) => {
                console.error('Error favoriting item:', error);
            });
        }
    }


    const handleLeftDelete = (itemID) => {
    const itemToMove = leftColumnItems.find((item) => item.id === itemID);

    if (itemToMove) {
        axios.delete(`//localhost:4000/api/bathrooms/${itemToMove._id}`)
            .then((response) => {
                const updatedLeftColumnItems = leftColumnItems.filter((item) => item._id !== itemToMove._id);
                console.log('Updated Left Column Items:', updatedLeftColumnItems);
                setLeftColumnItems(updatedLeftColumnItems);
            })
            .catch((error) => {
                console.error('Error deleting item:', error);
            });
    } else {
        console.error('Item not found:', itemID);
    }
};

    const handleRightDelete = (itemID) => {
        const itemToMove = rightColumnItem.find((item) => item.id === itemID);
        if (itemToMove) {
            axios.delete(`//localhost:4000/api/bathrooms/${itemToMove._id}`)
            .then((response) => {
                const updatedRightColumnItems = rightColumnItem.filter((item) => item._id !== itemToMove._id);
                setRightColumnItem(updatedRightColumnItems);
            })
            .catch((error) => {
                console.error('Error deleting item:', error);
            });
        }
    }

    const handleUnfavoriteButton = (itemID) => {
        const itemToMove = rightColumnItem.find((item) => item.id === itemID);
        if (itemToMove) {
            const update = { side: 'left' };
            axios.put(`//localhost:4000/api/bathrooms/${itemToMove._id}`, update)
            .then((response) => {
                const updatedRightColumnItems = rightColumnItem.filter((item) => item._id !== itemToMove._id);
                setLeftColumnItems([...leftColumnItems, itemToMove]);
                setRightColumnItem(updatedRightColumnItems);
            })
            .catch((error) => {
                console.error('Error favoriting item:', error);
            });
        }
    }

    
    
    const[selectedLocation, setSelectedLocation] = useState(null);
    const[showEditForm, setShowEditForm] = useState(false);
    const[showEditFormR, setShowEditFormR] = useState(false);
    

    const handleEditButtonClick  = (location) => {
        setSelectedLocation(location);
        setShowEditForm(true);
    };

    const handleFormSubmit = (locationData) => {
        console.log(locationData);
        setLeftColumnItems((prevLeftColumnItems) => {
            return prevLeftColumnItems.map((location) =>
                location._id === selectedLocation._id ? { ...location, ...locationData } : location
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
                location._id === selectedLocation._id ? { ...location, ...locationData } : location
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
                        key={location.id}
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
            <div className='box-contain'>
                <h4 className='rec-fav'>Favorites</h4>
                </div>
                {rightColumnItem.map((location) => (
                    <LocationFav
                        key={location.id}
                        img={location.img}
                        title={location.title}
                        date={location.date}
                        comment={location.comment}
                        handleUnfavoriteButton={() => handleUnfavoriteButton(location.id)}
                        handleRightDelete={() => handleRightDelete(location.id)}
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

