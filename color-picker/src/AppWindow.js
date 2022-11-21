import React from "react";
import { ColorBox } from "../ColorBox/ColorBox";
import { ResultBox } from "../ResultBox/ResultBox";
import {SaveButton} from "../Save/Save"
import {ColorPalet} from '../ColorPalet/ColorPalet';

export class AppWindow extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            colors: Array(3).fill(0),
            savedColors: [
            {
                rgb: Array(3).fill(0)
            }]
        };
    }

    handleWheel(i, e)
    {
        const copyValues = this.state.colors.slice();
        if(e.deltaY < 0 && copyValues[i] < 255)
        {
            copyValues[i]++;
        } 
        else if(e.deltaY > 0 && copyValues[i] > 0)
        {
            copyValues[i]--;
        }
        this.setState({ colors: copyValues }) 
    }


    displayRGBPickers(val)
    {
        const label = (val === 0) ? 'Red' : ((val === 1) ? 'Green' : 'Blue')
        const boxBackground = (val === 0) ? `rgb(${this.state.colors[0]}, 0, 0)` : ((val === 1) ? `rgb(0, ${this.state.colors[1]}, 0)`  : `rgb(0, 0, ${this.state.colors[2]}`);
        return ( <ColorBox value = {this.state.colors[val]} colorLabel={label} backgroundColor={{background: boxBackground}} onWheel = {(e) => this.handleWheel(val, e)}/>);
    }

    displayResultValue()
    {
        const R = this.state.colors[0];
        const G = this.state.colors[1];
        const B = this.state.colors[2];
        return `rgb(${R}, ${G}, ${B})`;
    } 

    handleClick()
    {
        const saveColor = this.state.colors.slice();
        const savedColorPalet = this.state.savedColors;
        const lastSaved = savedColorPalet[savedColorPalet.length - 1];
        const beep = lastSaved.rgb.slice();
        this.setState({
            savedColorPalet: savedColorPalet.concat([{
                rgb: beep
            }])
        })
        this.state.savedColors.forEach(x => console.log(x))
    }

    render()
    {
        return (
            <div>
                <h1>RGB color picker</h1>
                <div className="rgb-row">
                    { this.displayRGBPickers(0) }
                    { this.displayRGBPickers(1) }
                    { this.displayRGBPickers(2) }
                </div>
                <div className="resultDisplay">
                    <ResultBox pickedColor={this.displayResultValue()} backgroundColor={{background: this.displayResultValue()}}/>
                </div>
                <br/>
                <div>
                    <SaveButton onClick={() => this.handleClick()}/>
                </div>
                <div>
                    <ColorPalet list={this.state.savedColors} />
                </div>
                <br/>
            
               
            </div>
        );
    }
}
