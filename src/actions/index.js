import * as types from './actionTypes';
import * as readableAPI from '../api/readableAPI';

export const getCategoriesSuccess = (categories) => {
  return { type: types.GET_CATEGORIES, categories };
}

export const getPostsByCategoriesSucces = (posts) => {
  return { type: types.GET_POSTS_BY_CATEGORY, posts };
}

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

export const deleteCommentSuccess = (comment) => {
  return { type: types.DELETE_COMMENT, comment };
}

export const addCommentSuccess = (comment) => {
  return { type: types.ADD_COMMENT, comment };
}

export const getCommentsByPostSuccess = (comment) => {
  return { type: types.GET_COMMENTS_BY_POST, comment };
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

export const getCategories = () => dispatch => {
  return readableAPI.getCategories().then((categories) => {
    dispatch(getCategoriesSuccess(categories));
  })
    .catch(error => {
      throw (error);
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

export const getPosts = () => dispatch => {
  return readableAPI.getPosts().then((posts) => {
    dispatch(getPostsSucces(posts))
  })
  .catch(error => {
    throw(error)
  });
}

export const addNewPost = (post) => dispatch => {
  return readableAPI.addNewPost(post).then((post) => {
    dispatch(addNewPostSuccess(post))
  })
  .catch(error => {
    throw(error)
  });
}

export const getPostById = (id) => dispatch => {
  return readableAPI.getPostById(id).then((post) => {
    dispatch(getPostByIdSuccess(post))
  })
  .catch(error => {
    throw(error)
  });
}

export const votePost = (id, voteType) => dispatch => {
  return readableAPI.votePost(id, voteType).then((post) => {
    dispatch(votePostSuccess(post))
  })
  .catch(error => {
    throw(error)
  });
}

export const editPost = (id, title, body) => dispatch => {
  return readableAPI.editPost(id, title, body).then((post) => {
    dispatch(editPostSuccess(post))
  })
  .catch(error => {
    throw(error)
  });
}

export const deletePost = (id) => dispatch => {
  return readableAPI.deletePost(id).then((post) => {
    dispatch(deletePostSuccess(post))
  })
  .catch(error => {
    throw(error)
  });
}

export const deleteComment = (id) => dispatch => {
  return readableAPI.deleteComment(id).then((comment) => {
    dispatch(deleteCommentSuccess(comment))
  })
  .catch(error => {
    throw(error)
  });
}

export const addComment = (comment) => dispatch => {
  return readableAPI.addComment(comment).then((comment) => {
    dispatch(addCommentSuccess(comment))
  })
  .catch(error => {
    throw(error)
  });
}

export const getCommentsByPost = (id) => dispatch => {
  return readableAPI.getCommentsByPost(id).then((comment) => {
    dispatch(getCommentsByPostSuccess(comment))
  })
  .catch(error => {
    throw(error)
  });
}

export const getCommentDetails = (id) => dispatch => {
  return readableAPI.getCommentDetails(id).then((comment) => {
    dispatch(getCommentDetailsSuccess(comment))
  })
  .catch(error => {
    throw(error)
  });
}

export const voteComments = (id, typeOfVote) => dispatch => {
  return readableAPI.voteComments(id, typeOfVote).then((comment) => {
    dispatch(voteCommentsSuccess(comment))
  })
  .catch(error => {
    throw(error)
  });
}

export const editComment = (id, body) => dispatch => {
  return readableAPI.editComment(id, body).then((comment) => {
    dispatch(editCommentSuccess(comment))
  })
  .catch(error => {
    throw(error)
  });
}