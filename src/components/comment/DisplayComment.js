import React, { Component } from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class DisplayComment extends Component {
    handleOnDelete = () => {
        this.props.deleteComment(this.props.comment.id);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-1 post-likes">
                        <span onClick={() => { this.props.voteComments(this.props.comment.id, "upVote") }}>
                            <Glyphicon glyph="arrow-up" />
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <span onClick={() => { this.props.voteComments(this.props.comment.id, "downVote") }}>
                            <Glyphicon glyph="arrow-down" />
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span>{this.props.comment.author}   </span>
                        <span> <b>{this.props.comment.voteScore} point/s</b></span>
                    </div>
                    <div className="col">

                    </div>
                </div>
                <div className="row">
                    <span>{this.props.comment.body}</span>
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
            </div>
        );
    }
}

export default DisplayComment;