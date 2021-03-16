import React from 'react';
// import './Dice.css'

export default class Dice extends React.Component {
    render(){
        return (
            <div>
                {this.props.value}
            </div>
        )
    }
}