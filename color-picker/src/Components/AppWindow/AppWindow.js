import React, {useState } from "react";
import { ColorBox } from "../ColorBox/ColorBox";
import { ResultBox } from "../ResultBox/ResultBox";
import { SaveButton } from "../Save/Save"
import { ColorPalet } from '../ColorPalet/ColorPalet';


export function AppWindow() 
{
    const [colors, setColors] = useState(Array(3).fill(0))
    const [colorHistory, setColorHistory] = useState([]);

    const addToPalet = newColor =>
    {
        if(!colorHistory.includes(newColor))
        {
            setColorHistory((existingValues) => [newColor, ...existingValues])
        }
    }

    const removeFromPalet = removeVal =>
    {
       setColorHistory((existingValues) => existingValues.filter(item => item !== removeVal))
    }

    const pickSavedColor = pickedColorIndex => setColors(pickedColorIndex);

    const clearAll = () => setColorHistory([]);
  
    const displayRGBPickers = val => {
        const label = (val === 0) ? 'Red' : ((val === 1) ? 'Green' : 'Blue')
        const boxBackground = (val === 0) ? `rgb(${colors[0]}, 0, 0)` : ((val === 1) ? `rgb(0, ${colors[1]}, 0)` : `rgb(0, 0, ${colors[2]}`);
        return (<ColorBox 
                    color={colors}
                    setColor={setColors} 
                    colorLabel={label} 
                    backgroundColor={{ background: boxBackground }} 
                    id={val}
                />);
    }

    const displayResultValue = () => `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;

    const displaySavedPalet = () => {
        return (
                <ColorPalet 
                    savedColors={colorHistory} 
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
                    saveToPalet={() => addToPalet(colors)} 
                />
            </div>
            { colorHistory.length > 0  && displaySavedPalet() }
            <br />
        </div>
    );
}
