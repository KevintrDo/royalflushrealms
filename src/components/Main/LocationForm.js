import React, { useState } from 'react';

import './LocationForm.css'
import LocationFormButton from './LocationFormButton';

const LocationForm = (props) => {

  const[enteredTitle, setEnteredTitle] = useState('');
  const[enteredDate, setEnteredDate] = useState('');
  const[enteredImg, setEnteredImg] = useState('');
  const[enteredComment, setEnteredComment] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const locationData = {
      title: enteredTitle,
      date: enteredDate,
      img: enteredImg,
      comment: enteredComment,
    }
    console.log("LocationForm Msg");
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredImg('');
    setEnteredComment('');
    props.onSubmit(locationData);

    props.onClose();
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
              type="text" 
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
