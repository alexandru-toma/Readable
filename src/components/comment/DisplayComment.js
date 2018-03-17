import React, { Component } from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { editComment } from '../../actions/comments';

class DisplayComment extends Component {
    state = {
        body: this.props.comment.body,
        openModal: false
    }

    handleOnDelete = () => {
        this.props.deleteComment(this.props.comment.id);
    }

    handleBodyChange = (e) => {
        this.setState({ body: e.target.value });
    }

    onOpenModal = () => {
        this.setState({ openModal: true });
    };

    onCloseModal = () => {
        this.setState({ openModal: false });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editComment(this.props.comment.id, this.state.body);
        this.onCloseModal();
    }

    render() {
        const { openModal } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-1 post-likes">
                        <span onClick={() => { this.props.voteComments(this.props.comment.id, "upVote") }}>
                            <Glyphicon glyph="arrow-up" />
                        </span>
                        <span onClick={() => { this.props.voteComments(this.props.comment.id, "downVote") }}>
                            <Glyphicon glyph="arrow-down" />
                        </span>
                    </div>
                    <div className="col-sm-2">
                        <span>{this.props.comment.author}   </span>
                        <span> <b>{this.props.comment.voteScore} point/s</b></span>
                    </div>
                </div>
                <div className="row">
                    <span>{this.props.comment.body}</span>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <span className="btn btn-outline-info btn-sm" onClick={
                            this.onOpenModal}>edit</span>
                    </div>
                    <div className="col-md-1">
                        <span className="btn btn-outline-info btn-sm" onClick={() => {
                            this.handleOnDelete()
                        }}>delete</span>
                    </div>
                </div>
                <Modal open={openModal} onClose={this.onCloseModal} little>
                    <h3>Edit comment</h3>
                    <form className="needs-validation" noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="bodyPost">Body:</label>
                            <input type="text" className="form-control" id="bodyPost" value={this.state.body}
                                required onChange={this.handleBodyChange} />
                        </div>
                        <br></br>
                        <div className="row">
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </form>
                </Modal>
             </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editComment: (id, body) => dispatch(editComment(id, body)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayComment);