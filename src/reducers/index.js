const todoReducer = (state = [], action) => {
    const incomingState = action.data;
    if (action.type === "ADD_TODO") {

        state = [...state, incomingState];

    } else if (action.type === "EDIT_TODO") {

        console.log(incomingState);
        console.log(state);
        
        state = state.map(s => {
            if(s.id === incomingState.id) {
                return incomingState;
            }
            return s;
        });


    } else if (action.type === "DELETE_TODO") {

        state = state.filter(s => s.id !== incomingState.id);

    }

    return state;
}

export default todoReducer;