import React from "react";
import './ResultBox.css'

export function ResultBox(props)
{

    const result = `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]})`;
    const background = {background: result}
  
    return (
      <div className="result" style={background}>
        <h3>{result}</h3>
      </div>
    );
}