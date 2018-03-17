import * as types from '../actions/actionTypes';
import sortBy from 'sort-by'

export default function postReducer(state = [], action) {
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
            return state.map(postInState => {
                if (postInState.id === post.id) {
                    postInState = post
                }
                return postInState
            });
        case types.EDIT_POST:
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