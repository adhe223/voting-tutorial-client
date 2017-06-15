import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';

import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

const store = createStore(reducer);
store.dispatch ({
    type: "SET_STATE",
    state: {
        vote: {
            pair: ['Trainspotting', '28 Days Later'],
            tally: {'Trainspotting': 2}
        }
    }
});

ReactDOM.render(
    <Provider store={store}>
        <div>
            <VotingContainer />
            <ResultsContainer />
        </div>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
