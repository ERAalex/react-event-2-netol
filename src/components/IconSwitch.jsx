import React from "react";
import "./css/iconSwitch.css";


export const IconSwitch = (props) => {
    console.log('ProjectList---1--')

    const { icon, onSwitchView } = props;
    console.log(icon)
    console.log(onSwitchView)
    console.log('ProjectList----2--')

        return (
          <div className="iconSwitch">
            <span className="material-icons" onClick={onSwitchView}>
              {icon}
            </span>
          </div>
        );
}



