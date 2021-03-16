import React from 'react';
import { connect } from 'react-redux';
import DiceContainer from './DiceContainer';
import "./App.css";


 class App extends React.Component {

    handleChange(action) {
        this.props.dispatch({type: action})
      }

    render(){
        return(
            <div>
                <h1 className="tittle">Dice Roll</h1>
                <div className="buttomPos">
                <button onClick={()=>this.handleChange("ROLL_DICE")}>Roll Dice</button>
                <button onClick={()=>this.handleChange("CLEAR_DICE")}>Clean Dice</button>
                </div>
                <h2 className="tittle">Sum: {this.props.total}</h2>

                <DiceContainer diceList={this.props.dices}></DiceContainer>
            </div>
        )
    }
}

let mapDispatchToProps = function (dispatch){
    return {
        dispatch : dispatch,
    }
};

let mapStateToProps = (state) => {
    return{
        dices: state.DiceReducer.list,
        total: state.DiceReducer.total
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    
)(App)