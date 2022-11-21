import React from "react";
import "./ColorPalet.css";
import { SingleColor } from '../ColorPalet/SingleColor';

export function ColorPalet(props)
{
  const handleClearAll = () => 
  {
    props.onClearAll();
  }

  return (
    <div>
      <h3>Saved Colors</h3>
      <div className="SavedColorPalet">
        {props.savedColors.map((color, i) => (
          <SingleColor 
            key={i} 
            index={i} 
            value={color} 
            onColorPick={props.onColorPick} 
            onRemove={props.onRemove}
          />
        ))}
      </div>
      <br/>
      <button className="clearAll" onClick={handleClearAll}>Clear All</button>
    </div>
  );

}
