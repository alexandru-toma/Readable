import * as types from './actionTypes';
import * as readableAPI from '../api/readableAPI';

export const getPostsSucces = (posts) => {
    return { type: types.GET_POSTS, posts };
}

export const addNewPostSuccess = (post) => {
    return { type: types.ADD_NEW_POST, post };
}

export const getPostByIdSuccess = (post) => {
    return { type: types.GET_POST_BY_ID, post };
}

export const votePostSuccess = (post) => {
    return { type: types.VOTE_POSTS, post };
}

export const editPostSuccess = (post) => {
    return { type: types.EDIT_POST, post };
}

export const deletePostSuccess = (post) => {
    return { type: types.DELETE_POST, post };
}

export const postSortOrder = (sortType) => {
    return { type: types.SORT_POST, sortType }
}

export const getPostsByCategoriesSucces = (posts) => {
    return { type: types.GET_POSTS_BY_CATEGORY, posts };
}


export const getPosts = () => dispatch => {
    return readableAPI.getPosts().then((posts) => {
        dispatch(getPostsSucces(posts))
    })
        .catch(error => {
            throw (error)
        });
}

export const addNewPost = (post) => dispatch => {
    return readableAPI.addNewPost(post).then((post) => {
        dispatch(addNewPostSuccess(post))
    })
        .catch(error => {
            throw (error)
        });
}

export const getPostById = (id) => dispatch => {
    return readableAPI.getPostById(id).then((post) => {
        dispatch(getPostByIdSuccess(post))
    })
        .catch(error => {
            throw (error)
        });
}

export const votePost = (id, voteType) => dispatch => {
    return readableAPI.votePost(id, voteType).then((post) => {
        dispatch(votePostSuccess(post))
    })
        .catch(error => {
            throw (error)
        });
}

export const editPost = (id, title, body) => dispatch => {
    return readableAPI.editPost(id, title, body).then((post) => {
        dispatch(editPostSuccess(post))
    })
        .catch(error => {
            throw (error)
        });
}

export const deletePost = (id) => dispatch => {
    return readableAPI.deletePost(id).then((post) => {
        dispatch(deletePostSuccess(post))
    })
        .catch(error => {
            throw (error)
        });
}

export const getPostsByCategory = (category) => dispatch => {
    return readableAPI.getPostsByCategory(category).then((posts) => {
        dispatch(getPostsByCategoriesSucces(posts))
    })
        .catch(error => {
            throw (error);
        });
}