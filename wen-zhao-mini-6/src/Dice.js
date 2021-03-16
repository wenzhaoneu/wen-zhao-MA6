import React from 'react';
import './Dice.css'

export default class Dice extends React.Component {
    render(){
        return (
            <span id="Dice">
                {this.props.value}
            </span>
        )
    }
}