import * as types from './actionTypes';
import * as readableAPI from '../api/readableAPI';

export const deleteCommentSuccess = (comment) => {
    return { type: types.DELETE_COMMENT, comment };
}

export const addCommentSuccess = (comment) => {
    return { type: types.ADD_COMMENT, comment };
}

export const getCommentsByPostSuccess = (comments) => {
    return { type: types.GET_COMMENTS_BY_POST, comments };
}

export const getCommentDetailsSuccess = (comment) => {
    return { type: types.GET_COMMENT_DETAILS, comment };
}

export const voteCommentsSuccess = (comment) => {
    return { type: types.VOTE_COMMENTS, comment };
}

export const editCommentSuccess = (comment) => {
    return { type: types.EDIT_COMMENT, comment };
}


export const deleteComment = (id) => dispatch => {
    return readableAPI.deleteComment(id).then((comment) => {
        dispatch(deleteCommentSuccess(comment))
    })
        .catch(error => {
            throw (error)
        });
}

export const addComment = (comment) => dispatch => {
    return readableAPI.addComment(comment).then((comment) => {
        dispatch(addCommentSuccess(comment))
    })
        .catch(error => {
            throw (error)
        });
}

export const getCommentsByPost = (id) => dispatch => {
    return readableAPI.getCommentsByPost(id).then((comments) => {
        dispatch(getCommentsByPostSuccess(comments))
    })
        .catch(error => {
            throw (error)
        });
}

export const getCommentDetails = (id) => dispatch => {
    return readableAPI.getCommentDetails(id).then((comment) => {
        dispatch(getCommentDetailsSuccess(comment))
    })
        .catch(error => {
            throw (error)
        });
}

export const voteComments = (id, typeOfVote) => dispatch => {
    return readableAPI.voteComments(id, typeOfVote).then((comment) => {
        dispatch(voteCommentsSuccess(comment))
    })
        .catch(error => {
            throw (error)
        });
}

export const editComment = (id, body) => dispatch => {
    return readableAPI.editComment(id, body).then((comment) => {
        dispatch(editCommentSuccess(comment))
    })
        .catch(error => {
            throw (error)
        });
}