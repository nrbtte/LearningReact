import React from "react";
import './ColorBox.css';

export function ColorBox(props)
{

    const handleWheel = (event) =>
    {
        let newColorValue = props.color.slice();
        let i = props.id;
        if (event.deltaY < 0 && newColorValue[i] < 255) {
            newColorValue[i]++;
        }
        else if (event.deltaY > 0 && newColorValue[i] > 0) 
        {
            newColorValue[i]--;
        }
        props.setColor(newColorValue);
    }

    return (
        <div className="colorPickerBox" >
            <label htmlFor={props.colorLabel}>{props.colorLabel}</label>
            <div className="colorBox" id={props.colorLabel} style={props.backgroundColor} onWheel={handleWheel}>
                <h4>{props.color[props.id]}</h4>
            </div>
        </div>
    );
}
