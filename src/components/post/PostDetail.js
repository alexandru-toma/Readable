import React, { Component } from 'react';
import { getPostById, getCommentsByPost, deletePost } from '../../actions';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';
import ListCommentsForPost from '../comment/ListCommentsForPost';

class PostDetail extends Component {

    componentWillMount() {
        const { getPostById, getCommentsByPost } = this.props
        getPostById(this.props.match.params.postId)
        getCommentsByPost(this.props.match.params.postId)
    }

    handleOnDelete = () => {
        this.props.deletePost(this.props.match.params.postId);
        this.props.history.push('/');
    }

    render() {
        const { post } = this.props
        return (
            <div className="container">
                <h2>Post Details</h2>
                {post && post.map(singlePost =>
                    <span key={singlePost.id}>
                        <div className="row">
                            <span><b>Title: </b> {singlePost.title}</span>
                        </div>
                        <div className="row">
                            <span><b>Body: </b> {singlePost.body}</span>
                        </div>
                        <div className="row">
                            <span><b>Author: </b> {singlePost.author}</span>
                        </div>
                        <div className="row">
                            <span><b>Time: </b> <Timestamp time={singlePost.timestamp} format='date' /> </span>
                        </div>
                        <div className="row">
                            <span><b>Vote Score: </b>{singlePost.voteScore}</span>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <span onClick={() => { }}>edit</span>
                            </div>
                            <div className="col-md-1">
                                <span onClick={() => {
                                    this.handleOnDelete()
                                }}>delete</span>
                            </div>
                        </div>
                        <div className="row">
                            <ListCommentsForPost parentId={this.props.match.params.postId} />
                        </div>

                    </span>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.postReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPostById: (id) => dispatch(getPostById(id)),
        getCommentsByPost: (id) => dispatch(getCommentsByPost(id)),
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetail);