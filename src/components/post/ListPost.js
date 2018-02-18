import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import { connect } from 'react-redux'
import { votePost, getPosts, postSortOrder } from '../../actions'

class ListPost extends Component {
    componentWillMount() {
        const { getAllPosts } = this.props
        getAllPosts();
    }

    render() {
        const { posts, votePost, postSortOrder } = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-1">
                        <span> Sort By: </span>
                    </div>
                    <div className="col-sm-2">
                        <span onClick={() => { postSortOrder("voteScore") }}>VoteScore
                        <Glyphicon glyph="glyphicon glyphicon-sort" />
                        </span>
                    </div>
                    <div className="col-sm-2">
                        <span onClick={() => { postSortOrder("timestamp") }}> Time
                        <Glyphicon glyph="glyphicon glyphicon-sort" />
                        </span>
                    </div>
                    <div className="col-sm-5"></div>
                    <div className="col-sm-2">
                    <Link to={`posts/new`}>
                        <button className="btn btn-info">
                            <span class="glyphicon glyphicon-plus-sign"></span> Add post
                        </button>
                        </Link>
                    </div>
                </div>
                <ul>
                    {posts && posts.map((post) =>
                        <li key={post.id}>
                            <div className="row">
                                <div className="col-sm-1 post-likes">
                                    <span onClick={() => { votePost(post.id, "upVote") }}>
                                        <Glyphicon glyph="arrow-up" />
                                    </span>
                                    {post.voteScore}
                                    <span onClick={() => { votePost(post.id, "downVote") }}>
                                        <Glyphicon glyph="arrow-down" />
                                    </span>
                                </div>
                                <div className="col-sm-11 post-title">
                                    <Link to={`${post.category}/${post.id}`}>
                                        <h3>{post.title}</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className="post-body">
                                <h4>{post.body}</h4>
                            </div>
                            <div className="post-comment">
                                <span>{post.commentCount && post.commentCount} comment/s</span>
                            </div>
                        </li>)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        votePost: (id, voteType) => dispatch(votePost(id, voteType)),
        getAllPosts: () => dispatch(getPosts()),
        postSortOrder: (sortType) => dispatch(postSortOrder(sortType))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPost);