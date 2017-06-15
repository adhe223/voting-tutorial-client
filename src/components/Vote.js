import React from 'react';

const Vote = (props) => {
    const pair = props.pair || [];
    let pairJSX = pair.map((entry) => {
        const hasVoted = (entry === props.hasVoted);
        const labelJSX = hasVoted ? <div className="label">Voted</div> : null;

        return (
            <button key={entry}
                    onClick={() => {props.vote(entry);}}
                    disabled={!!props.hasVoted}>
                <h1>{entry}</h1>
                {labelJSX}
            </button>
        );
    });

    return (
        <div className="voting">
            {pairJSX}
        </div>
    );
};

export default Vote;