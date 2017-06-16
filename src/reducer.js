import {List, Map} from 'immutable';

const reducer = (state = Map(), action) => {
    switch (action.type) {
        case "SET_STATE":
            return resetState(setState(state, action.state));
        case "VOTE":
            return vote(state, action.entry);
        default:
            return state;
    }
};

const setState = (state, newState) => {
    return state.merge(newState);
};

const resetState = (state) => {
    const hasVoted = state.get('hasVoted');
    const currentPair = state.getIn(['vote', 'pair'], List());
    if (hasVoted && !currentPair.includes(hasVoted)) {
        return state.remove('hasVoted');
    } else {
        return state;
    }
};

const vote = (state, entry) => {
    const currentPair = state.getIn(['vote', 'pair']);
    if (currentPair && currentPair.includes(entry)) {
        return state.set('hasVoted', entry);
    } else {
        return state;
    }
};

export default reducer;