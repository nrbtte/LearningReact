import React from "react";
import './ResultBox.css'

export function ResultBox(props)
{
    return (
      <div className="result" style={props.backgroundColor}>
        <h3>{props.pickedColor}</h3>
      </div>
    );
}