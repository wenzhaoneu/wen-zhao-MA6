import React from 'react';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.diceRoll = this.diceRoll.bind(this);
        this.randomRoll = this.randomRoll.bind(this);
        this.cleanRoll = this.cleanRoll.bind(this);
    };

    randomRoll() {
        return Math.floor(Math.random() * 6) + 1;
    }

    diceRoll() {
        this.props.store.dispatch({
            type: "ROLL_DICE",
            payload: this.randomRoll(),
            condition: false
        })
    }

    cleanRoll() {
        this.props.store.dispatch({
            type: "CLEAR_DICE",
            payload: null,
            condition: true
        })
    }

    displayRoll() {
        var result = this.props.store.getState().list.map((item,index)=>{
            return <span style={{margin:4}} key={index}>{item}</span>;
        });
        if(this.props.store.getState().isEmpty) {
            result = null;
        }
        return result;
    }

    render(){
        return(
            <div>
                <h1>Dice Roll</h1>
                <button onClick={this.diceRoll}>Roll Dice</button>
                <button onClick={this.cleanRoll}>Clean Dice</button>
                <h2>Sum: {this.props.store.getState().total}</h2>
                <div>
                   {this.displayRoll()}
                </div>

            </div>
        );
    };
}

