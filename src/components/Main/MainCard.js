import React from 'react';

import './MainCard.css';

const MainCard = (props) => {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;

};

export default MainCard;
