const RollReducer = (state = {list:[], total:0, isEmpty:true}, action={})=>{
    switch(action.type) {
        case 'ROLL_DICE':
            const newState = Object.assign({},state);
            newState.list.push(action.payload);
            newState.total += action.payload;
            newState.isEmpty = action.condition;
            return newState;
        case 'CLEAR_DICE':
            return {list:[], total:0, isEmpty:true};
        default:
            return state;

    }
};

export default RollReducer;