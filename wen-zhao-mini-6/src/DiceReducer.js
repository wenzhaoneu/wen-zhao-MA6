export default function DiceReducer (state={list:[], total:0}, action){
    switch(action.type) {
        case "ROLL_DICE":
            const newState = {...state};
            const value = randomRoll;
            newState.list.push(value);
            newState.total += value;
            return newState;
        case "CLEAR_DICE":
            return {list:[], total:0};
        default:
            return state;

    }
};

const randomRoll = Math.floor(Math.random() * 6) + 1;
