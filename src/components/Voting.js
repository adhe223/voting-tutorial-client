import React from 'react';
import {connect} from 'react-redux';

import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../action_creators';

export const Voting = (props) => {
    return (
        <div>
            {props.winner ?
                <Winner winner={props.winner} /> :
                <Vote {...props} />
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        pair: state.getIn(['vote', 'pair']),
        winner: state.get('winner'),
        hasVoted: state.get('hasVoted')
    };
};

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);
