import React from 'react';

import './MainButtonEdit.css';

const MainButtonEdit = (props) => {
  return (
    <button
      className="buttonEdit"
      type={props.type || 'buttonEdit'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default MainButtonEdit;