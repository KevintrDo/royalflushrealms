import React from 'react';

import './MainButtonFavorite';

const MainButtonFavorite = (props) => {
  return (
    <button
      className="button"
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default MainButtonFavorite;