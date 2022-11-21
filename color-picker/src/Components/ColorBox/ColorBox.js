import React from "react";
import './ColorBox.css';

export function ColorBox(props)
{
    const handleWheel = (event) =>
    {
        let colorValue = props.color.slice();
        let i = props.id;
        if (event.deltaY < 0 && colorValue[i] < 255) {
            colorValue[i]++;
        }
        else if (event.deltaY > 0 && colorValue[i] > 0) 
        {
            colorValue[i]--;
        }
        props.setColor(colorValue);
    }

    const determineLabel = (i) => (i === 0) ? 'Red' : ((i === 1) ? 'Green' : 'Blue');
    const backgroundColor = (i) => (i === 0) ? `rgb(${props.color[0]}, 0, 0)` : ((i === 1) ? `rgb(0, ${props.color[1]}, 0)` : `rgb(0, 0, ${props.color[2]}`);
    
    const label = determineLabel(props.id);
    const boxBackground = {background : backgroundColor(props.id)};

    return (
        
        <div className="colorPickerBox" >
            <label htmlFor={label}>{label}</label>
            <div className="colorBox" id={label} style={boxBackground} onWheel={handleWheel}>
                <h4>{props.color[props.id]}</h4>
            </div>
        </div>
    );
}
