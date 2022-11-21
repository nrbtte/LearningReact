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

    const removeFromPalet = removeColor =>
    {
        setSavedToPalet((existingValues) => existingValues.filter(item => item !== removeColor));
    }

    const pickSavedColor = pickedColor => setColor(pickedColor);

    const clearAll = () => setSavedToPalet([]);
  
    const displayRGBPickers = val => {
        const label = (val === 0) ? 'Red' : ((val === 1) ? 'Green' : 'Blue')
        const boxBackground = (val === 0) ? `rgb(${color[0]}, 0, 0)` : ((val === 1) ? `rgb(0, ${color[1]}, 0)` : `rgb(0, 0, ${color[2]}`);
        return (<ColorBox 
                    color={color}
                    setColor={setColor} 
                    colorLabel={label} 
                    backgroundColor={{ background: boxBackground }} 
                    id={val}
                />);
    }

    const displayResultValue = () => `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

    const displaySavedPalet = () => {
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
                    pickedColor={displayResultValue()} 
                    backgroundColor={{ background: displayResultValue() }} 
                />
            </div>
            <br />
            <div>
                <SaveButton 
                    saveToPalet={() => addToPalet(color)} 
                />
            </div>
            { savedToPalet.length > 0  && displaySavedPalet() }
            <br />
        </div>
    );
}
