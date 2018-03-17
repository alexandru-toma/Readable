import * as types from '../actions/actionTypes';

export default function commentReducer(state = [], action) {
    const { comments, comment } = action
    switch (action.type) {
        case types.GET_COMMENTS_BY_POST:
            return [...comments];
        case types.VOTE_COMMENTS:
            return (
                state.map(commentInState => {
                    if (commentInState.id === comment.id) {
                        commentInState = comment
                    }
                    return commentInState
                })
            );
        case types.ADD_COMMENT:
            return state.concat([comment]);
        case types.DELETE_COMMENT:
            return (
                state.map(commentInState => {
                    if (commentInState.id === comment.id) {
                        commentInState = comment
                    }
                    return commentInState
                })
            );
        case types.EDIT_COMMENT:
            return (
                state.map(commentInState => {
                    if (commentInState.id === comment.id) {
                        commentInState = comment
                    }
                    return commentInState
                })
            );
        default:
            return state;
    }
}