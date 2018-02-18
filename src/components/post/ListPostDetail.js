import React from 'react'
import { Link } from 'react-router-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

const ListPostDetails = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-1 post-likes">
                    <span onClick={() => { props.votePost(props.post.id, "upVote") }}>
                        <Glyphicon glyph="arrow-up" />
                    </span>
                    {props.post.voteScore}
                    <span onClick={() => { props.votePost(props.post.id, "downVote") }}>
                        <Glyphicon glyph="arrow-down" />
                    </span>
                </div>
                <div className="col-sm-11 post-title">
                    <Link to={`${props.post.category}/${props.post.id}`}>
                        <h3>{props.post.title}</h3>
                    </Link>
                </div>
            </div>
            <div className="post-body">
                <h4>{props.post.body}</h4>
            </div>
            <div className="post-comment">
                <span>{props.post.commentCount && props.post.commentCount} comment/s</span>
            </div>
        </div>
    );
}

export default ListPostDetails;