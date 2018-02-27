import React, { Component } from 'react';
import { getPostById, getCommentsByPost } from '../../actions';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';
import ListCommentsForPost from '../comment/ListCommentsForPost';

class PostDetail extends Component {

    componentWillMount() {
        const { getPostById, getCommentsByPost } = this.props
        getPostById(this.props.match.params.postId)
        getCommentsByPost(this.props.match.params.postId)
    }

    render() {
        const { post } = this.props;

        return (
            <div className="container">
                <h2 className="page-header">Post Details</h2>
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
                            <span><b>Time: </b> <Timestamp time={singlePost.timestamp/1000} format="full"/> </span>
                        </div>
                        <div className="row">
                            <span><b>Vote Score: </b>{singlePost.voteScore}</span>
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetail);