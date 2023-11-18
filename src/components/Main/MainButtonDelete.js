import React from 'react';

import './MainButtonDelete.css';

const MainButtonDelete = (props) => {
  return (
    <button
      className="buttonDelete"
      type={props.type || 'buttonDelete'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default MainButtonDelete;