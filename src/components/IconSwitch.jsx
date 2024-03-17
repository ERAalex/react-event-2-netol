import React from "react";
import "./css/iconSwitch.css";


export const IconSwitch = (props) => {

    const { icon, onSwitchView } = props;

        return (
          <div className="iconSwitch">
            <span className="material-icons" onClick={onSwitchView}>
              {icon}
            </span>
          </div>
        );
}



