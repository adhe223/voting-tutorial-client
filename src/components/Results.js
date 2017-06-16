import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

import Winner from './Winner';

export const Results = (props) => {
    const getVotes = (entry) => {
        if (props.tally && props.tally.has(entry)) {
            return props.tally.get(entry);
        }
        return 0;
    };

    const pair = props.pair || [];
    let resultJSX;

    if (props.winner) {
        resultJSX = <Winner winner={props.winner} />;
    } else {
        let pairJSX = pair.map((entry) => {
            return (
                <div key={entry} className="results">
                    <h1>{entry}</h1>
                    <div className="voteCount">
                        {getVotes(entry)}
                    </div>
                </div>
            );
        });

        resultJSX =
        <div>
            {pairJSX}
            <div className="management">
                <button className="next" onClick={props.next}>
                    Next
                </button>
            </div>
        </div>;
    }

     return (
        <div>
            {resultJSX}
        </div>
     );
};

const mapStateToProps = (state) => {
    return {
        pair: state.getIn(['vote', 'pair']),
        tally: state.getIn(['vote', 'tally']),
        winner: state.get('winner')
    };
};

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);
