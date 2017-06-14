import React from 'react';

const Voting = (props) => {
    const pair = props.pair || [];
    let pairJSX = pair.map((entry) => {
        return (
            <button key={entry} onclick={() => {props.vote(entry);}}>
                <h1>{entry}</h1>
            </button>
        );
    });

    return (
        <div className="voting">
            {pairJSX}
        </div>
    );
};

export default Voting;