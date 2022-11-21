import React from "react";
import './ColorBox.css';

export function ColorBox(props)
{
    return (
        <div className="colorPickerBox" onWheel={props.onWheel}>
            <label htmlFor={props.colorLabel}>{props.colorLabel}</label>
            <div className="colorBox" id={props.colorLabel} style={props.backgroundColor}>
                <h4>{props.value}</h4>
            </div>
        </div>
    );
}
