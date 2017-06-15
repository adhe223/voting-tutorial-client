import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Voting from './components/Voting';
import Result from './components/Results';

const pair = ['Trainspotting', '28 Days Later'];
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

ReactDOM.render(
    <div>
        <Voting pair={pair} hasVoted="Trainspotting" />
        <Result pair={pair} tally={tally} />
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
