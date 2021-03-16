import React from 'react';
import Dice from './Dice';
import './DiceContainer.css';

export default class DiceContainer extends React.Component{
    render() {
        return (
            <div id="DiceContainer">
                {this.props.diceList.map((item,index)=><Dice key={index} value={item}></Dice>)}
            </div>
        )
    }
}