import React from 'react';
import Dice from './Dice'

export default class DiceContainer extends React.Component{

    render() {
        return (
            <div>
                {this.props.list.map((item,index)=><Dice key={index,item} value={item}>{item}</Dice>)};
            </div>
        )
    }
}