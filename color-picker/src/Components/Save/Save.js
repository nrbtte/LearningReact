import React from "react";
import './Save.css'

export function SaveButton(props)
{
    return(
        <div className="save">
            <button id='saveBtn' onClick={props.saveToPalet}>Save</button>
        </div>
    );
} 