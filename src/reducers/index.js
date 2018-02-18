import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import * as types from '../actions/actionTypes';
import sortBy from 'sort-by'

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
    const { posts, post, sortType } = action
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
        case types.SORT_POST:
            return [].concat(state.sort(sortBy("-" + sortType)));
        case types.ADD_NEW_POST:
            return state.concat([post]);
        case types.GET_POSTS_BY_CATEGORY:
            return [...posts];
        default:
            return state;
    }
}

export default combineReducers({
    categoryReducer,
    postReducer,
    routing: routerReducer
});