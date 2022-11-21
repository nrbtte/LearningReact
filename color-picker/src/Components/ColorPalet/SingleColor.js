import React from "react";
import './ColorPalet.css'

export function SingleColor(props)
{
    const formatBackground = () =>
    {
        const color = props.value;
        return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    }

    const formatCode = () =>
    {
        const color = props.value;
        return `[${color[0]}, ${color[1]}, ${color[2]}]`
    }

    const handleClick = () => props.onColorPick(props.value)   
    const handleMiddleClick = () => props.onRemove(props.value);

    return (
        <div 
            className="savedColor" 
            style={{background: formatBackground()}} 
            onClick={handleClick} 
            onAuxClick={handleMiddleClick}>
                {formatCode()}
        </div>
    );
}