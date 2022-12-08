import React from 'react';
import './ToogleTheme.css';

import { BsSunFill, BsMoonFill } from 'react-icons/bs';

function ToogleTheme(props) {


  return (
    <div className="ToogleTheme">
      <button className={props.theme} onClick={props.themeChange}>
        <div className={`icon sun ${props.theme === "dark" ? "hide" : ""}`}>
          <BsSunFill />
        </div>
        <div className={`icon moon ${props.theme === "light" ? "hide" : ""}`}>
          <BsMoonFill />
        </div>
      </button>
    </div>
  );
}

export default ToogleTheme;