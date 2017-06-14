import React, { Component } from 'react';
import Voting from './components/Voting';

class App extends Component {
    render() {
        const pair = ['Trainspotting', '28 Days Later'];

        return (
            <div>
                <Voting pair = {pair} />
            </div>
        );
    }
}

export default App;
