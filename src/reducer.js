import {Map} from 'immutable';

const reducer = (state = Map(), action) => {
    switch (action.type) {
        case "SET_STATE":
            return setState(state, action.state);
        default:
            return state;
    }
};

const setState = (state, newState) => {
    return state.merge(newState);
};

export default reducer;