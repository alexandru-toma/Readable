import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import Modal from 'react-responsive-modal';
import { editPost, deletePost } from '../../actions';
import { connect } from 'react-redux';

class ListPostDetails extends Component {

    state = {
        body: this.props.post.body,
        title: this.props.post.title,
        openModal: false
    }

    onOpenModal = () => {
        this.setState({ openModal: true });
    };

    onCloseModal = () => {
        this.setState({ openModal: false });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    }

    handleBodyChange = (e) => {
        this.setState({ body: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.editPost(this.props.post.id, this.state.title, this.state.body);
        this.onCloseModal();
    }

    handleOnDelete = () => {
        this.props.deletePost(this.props.post.id);
        window.location.reload();
    }

    render() {
        const { openModal } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-1 post-likes">
                        <span onClick={() => { this.props.votePost(this.props.post.id, "upVote") }}>
                            <Glyphicon glyph="arrow-up" />
                        </span>
                        {this.props.post.voteScore}
                        <span onClick={() => { this.props.votePost(this.props.post.id, "downVote") }}>
                            <Glyphicon glyph="arrow-down" />
                        </span>
                    </div>
                    <div className="col-sm-11 post-title">
                        <Link to={`${this.props.post.category}/${this.props.post.id}`}>
                            <h3>{this.props.post.title}</h3>
                        </Link>
                    </div>
                </div>
                <div className="post-body">
                    <h4>{this.props.post.body}</h4>
                </div>
                <div className="row">
                    <div className="post-comment">
                        <span>{this.props.post.commentCount && this.props.post.commentCount} comment/s</span>
                    </div>
                    <div className="col-md-1">
                        <span className="btn btn-outline-info btn-sm" onClick={this.onOpenModal}>edit</span>
                    </div>
                    <Modal open={openModal} onClose={this.onCloseModal} little>
                        <h3>Edit post</h3>
                        <form className="needs-validation" noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="titlePost">Title:</label>
                                <input type="text" className="form-control" id="titlePost"
                                    required value={this.state.title} onChange={this.handleTitleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bodyPost">Body:</label>
                                <input type="text" className="form-control" id="bodyPost"
                                    required value={this.state.body} onChange={this.handleBodyChange} />
                            </div>
                            <br></br>
                            <div className="row">
                                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </Modal>
                    <div className="col-md-1 btn btn-outline-info btn-sm">
                        <span onClick={() => {
                            this.handleOnDelete()
                        }}>delete</span>
                    </div>
                </div>
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
        editPost: (id, title, body) => dispatch(editPost(id, title, body)),
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPostDetails);