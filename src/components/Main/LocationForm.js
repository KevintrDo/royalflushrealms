import React, { useState} from 'react';

import './LocationForm.css'
import LocationFormButton from './LocationFormButton';
import axios from 'axios';

const LocationForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState(props.selectedLocation ? props.selectedLocation.title : '');
  const [enteredDate, setEnteredDate] = useState(props.selectedLocation ? props.selectedLocation.date : '');
  const [enteredImg, setEnteredImg] = useState(props.selectedLocation ? props.selectedLocation.img : '');
  const [enteredComment, setEnteredComment] = useState(props.selectedLocation ? props.selectedLocation.comment : '');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const locationData = {
      title: enteredTitle,
      date: enteredDate,
      img: enteredImg,
      comment: enteredComment,
    };
    axios
      .put(`//localhost:4000/api/bathrooms/${props.selectedLocation._id}`, locationData)
      .then((res)=>{

          props.onSubmit(locationData);
          props.onClose();
      })
          .catch((error) => {
              console.error('Error adding location:', error);
      });
  };


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const imgChangeHandler = (event) => {
    setEnteredImg(event.target.value);
  };

  const commentChangeHandler = (event) => {
    setEnteredComment(event.target.value);
  };


  return (

        <div className="model-container">
          <div className="model">
            <div>
            <h2>Edit Form</h2>
            <form onSubmit={handleFormSubmit} className="form-group">
              <label>Title: </label>
              <input 
                type="text" 
                id="title" 
                onChange={titleChangeHandler}
                value={enteredTitle}
                />
              <br/>
              <label>Date: </label>
              <input 
              type="date" 
              id="date" 
              onChange={dateChangeHandler}
              value={enteredDate}
              />
              <br/>
              <label>Link to image: </label>
              <input 
              type="text" 
              id="img" 
              onChange={imgChangeHandler}
              value={enteredImg}
              />
              <br/>
              <label>Comment: </label>
              <input 
              type="text"
              id="comment"
              onChange={commentChangeHandler}
              value={enteredComment}
              />
              <br/>
              <LocationFormButton type="submit">Submit</LocationFormButton>
            </form>
            </div>
          </div>

    </div>
  );
};

export default LocationForm;
