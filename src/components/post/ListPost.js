import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import { connect } from 'react-redux'
import { votePost, postSortOrder } from '../../actions/posts'
import ListPostDetail from './ListPostDetail';

class ListPost extends Component {
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
                                <span className="glyphicon glyphicon-plus-sign"></span> Add post
                        </button>
                        </Link>
                    </div>
                </div>
                <ul className="list-group">
                    {posts && posts.map((post) =>
                        <li key={post.id} className="list-group-item">
                            <ListPostDetail post={post} votePost={votePost}/>
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
        postSortOrder: (sortType) => dispatch(postSortOrder(sortType))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPost);