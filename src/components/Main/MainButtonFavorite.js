import React from 'react';

import './MainButtonFavorite.css';

const MainButtonFavorite = (props) => {
  return (
    <button
      className="buttonFav"
      type={props.type || 'buttonFav'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default MainButtonFavorite;