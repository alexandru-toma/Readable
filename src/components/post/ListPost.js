import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import { connect } from 'react-redux'
import { votePost, getPosts } from '../../actions'

class ListPost extends Component {
    componentWillMount() {
        const { getAllPosts } = this.props
        getAllPosts();
        votePost("8xf0y6ziyjabvozdd253nd","upVote")
    }

    render() {
        const { posts, votePost } = this.props
        return (
            <div>
                <ol>
                {console.log(posts)}
                    {posts && posts.map((post) =>
                        <li key={post.id}>
                            <div className="post-title">
                                <Link to={`${post.category}/${post.id}`}>
                                    <h3>{post.title}</h3>
                                </Link>
                            </div>
                            <div className="post-likes">
                                <span onClick={() => { votePost(post.id, "upVote") }}>
                                    <Glyphicon glyph="arrow-up" />
                                </span>
                                {post.voteScore}
                                <span onClick={() => { votePost(post.id, "downVote") }}>
                                    <Glyphicon glyph="arrow-down" />
                                </span>
                            </div>
                            <div className="post-body">
                                <h4>{post.body}</h4>
                            </div>
                        </li>)}
                </ol>
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
        getAllPosts: () => dispatch(getPosts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPost);