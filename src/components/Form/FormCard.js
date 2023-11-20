import React from 'react';

import './FormCard.css';

const FormCard = (props) => {
  const classes = 'form-card';
  
  return <div className={classes}>{props.children}</div>;

};

export default FormCard;