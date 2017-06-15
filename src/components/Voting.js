import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

const Voting = (props) => {
    return (
        <div>
            {props.winner ?
                <Winner winner={props.winner} /> :
                <Vote {...props} />
            }
        </div>
    );
};

export default Voting;