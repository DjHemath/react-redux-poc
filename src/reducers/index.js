import { combineReducers } from 'redux';

const counterReducer = (state=0, action) => {
    if (action.type === 'INCREMENT') {
        state = state + 1;
    } else if (action.type === 'DECREMENT') {
        state = state - 1;
    }

    return state;
}

// const allReducers = combineReducers({
//     counter: counterReducer
// });

// export default allReducers;

export default counterReducer;