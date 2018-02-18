import React from 'react'
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

const DisplayComment = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-1 post-likes">
                    <span onClick={() => {props.voteComments(props.comment.id, "upVote")}}>
                        <Glyphicon glyph="arrow-up" />
                    </span>
                </div>
            </div>
            <div className="row">
                <div>
                    <span onClick={() => {props.voteComments(props.comment.id, "downVote")}}>
                        <Glyphicon glyph="arrow-down" />
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>{props.comment.author}   </span>
                    <span> <b>{props.comment.voteScore} point/s</b></span>
                </div>
                <div className="col">
                  
                </div>
            </div>
            <div className="row">
                <span>{props.comment.body}</span>
            </div>
            <div className="row">
            </div>
        </div>
    );
}

export default DisplayComment;