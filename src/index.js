/* eslint no-restricted-globals: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import io from 'socket.io-client';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';

import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

socket.on('state', (state) => {
        store.dispatch(setState(state));
    }
);

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
