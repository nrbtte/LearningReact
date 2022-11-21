import React, {useState } from "react";
import { ColorBox } from "../ColorBox/ColorBox";
import { ResultBox } from "../ResultBox/ResultBox";
import { SaveButton } from "../Save/Save"
import { ColorPalet } from '../ColorPalet/ColorPalet';


export function AppWindow() 
{
    const [color, setColor] = useState(Array(3).fill(0))
    const [savedToPalet, setSavedToPalet] = useState([]);

    const addToPalet = newColor =>
    {
        if(!savedToPalet.includes(newColor))
        {
            setSavedToPalet((existingValues) => [newColor, ...existingValues])
        }
    }

    const removeFromPalet = removeColor => setSavedToPalet((existingValues) => existingValues.filter(item => item !== removeColor));
        
    const pickSavedColor = pickedColor => setColor(pickedColor);

    const clearAll = () => setSavedToPalet([]);
  
    const displayRGBPickers = val => 
    {
        return (<ColorBox 
                    id={val}
                    color={color}
                    setColor={setColor} 
                />);
    }

    const displayPalet = () => {
        return (
                <ColorPalet 
                    savedColors={savedToPalet} 
                    onColorPick={pickSavedColor} 
                    onRemove={removeFromPalet} 
                    onClearAll={clearAll}
                /> );
    }

    return (
        <div>
            <h1>RGB color picker</h1>
            <div className="rgb-row">
                {displayRGBPickers(0)}
                {displayRGBPickers(1)}
                {displayRGBPickers(2)}
            </div>
            <div className="resultDisplay">
                <ResultBox 
                    color={color} 
                />
            </div>
            <br />
            <div>
                <SaveButton 
                    saveToPalet={() => addToPalet(color)} 
                />
            </div>
            { savedToPalet.length > 0  && displayPalet() }
            <br />
        </div>
    );
}
