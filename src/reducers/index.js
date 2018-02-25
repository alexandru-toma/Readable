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

function commentReducer(state=[], action){
    const { comments, comment } = action
    switch (action.type) {
        case  types.GET_COMMENTS_BY_POST:
            return [...comments];
        case types.VOTE_COMMENTS:
            return (
                state.map(commentInState => {
                    if (commentInState.id === comment.id) { 
                        commentInState = comment }
                    return commentInState
                })
            );
        case types.ADD_COMMENT:
            return state.concat([comment]);
        case types.DELETE_COMMENT:
            return (
                state.map(commentInState => {
                    if (commentInState.id === comment.id) { 
                        commentInState = comment }
                    return commentInState
                })
            );
        case types.EDIT_COMMENT:
            return (
                state.map(commentInState => {
                    if (commentInState.id === comment.id) { 
                        commentInState = comment }
                    return commentInState
            })
        );
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
        case types.GET_POST_BY_ID:
            return [post];
        case types.DELETE_POST:
            return  state.map(postInState => {
                if (postInState.id === post.id) { 
                    postInState = post }
                return postInState
            });
        default:
            return state;
    }
}

export default combineReducers({
    categoryReducer,
    postReducer,
    commentReducer,
    routing: routerReducer
});