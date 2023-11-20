import React from 'react';

import './LocationFormButton.css';


const LocationFormButton= (props) => {
  return (
    <button
      className="editButton"
      type={props.type || 'editButton'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default LocationFormButton;
