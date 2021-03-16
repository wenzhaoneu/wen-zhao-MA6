import React from 'react';
import { connect } from 'react-redux';
import DiceContainer from './DiceContainer';


 class App extends React.Component {

    // constructor(props) {
    //     super(props);
    // };

    handleChange(action) {
        this.props.appDispatch({type: action})
      }

    render(){
        return(
            <div>
                <h1>Dice Roll</h1>
                <button onClick={()=>this.handleChange('ROLL_DICE')}>Roll Dice</button>
                <button onClick={()=>this.handleChange('CLEAR_DICE')}>Clean Dice</button>
                {/* <h2>Sum: {this.props.total}</h2>
                <DiceContainer ></DiceContainer> */}
            </div>
        );
    };
}

let mapDisPros = function (dispatch, props){
    return {
        appDispatch : dispatch,
    }
};

let mapStateProps = function(state, props) {
    return{
        list: state.dice.list,
        total: state.dice.total
    }
}

export default connect(
    mapDisPros,
    mapStateProps
)(App)