import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import * as types from '../actions/actionTypes';

function categoryReducer(state = [], action) {
    const { categories } = action
    switch (action.type) {
        case types.GET_CATEGORIES:
            return [...categories];
        default:
            return state;
    }
}

function postReducer(state = [], action) {
    const { posts, post } = action
    switch (action.type) {
        case types.GET_POSTS:
            return [...posts];
        case types.VOTE_POSTS:
            return (
                state.map(postInState => {
                    if (postInState.id === post.id) { postInState = post }
                    return postInState
                })
            );
        default:
            return state;
    }
}

export default combineReducers({
    categoryReducer,
    postReducer,
    routing: routerReducer
});