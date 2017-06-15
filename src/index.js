import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Dayss Later'];

ReactDOM.render(
    <Voting pair={pair} hasVoted="Trainspotting" />,
    document.getElementById('root')
);
registerServiceWorker();
