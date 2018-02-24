import React, {Component} from 'react';
import { addComment } from '../../actions';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';

class AddNewComment extends Component {
    state = {
        body: "",
        author: "",
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
    }

    handleBodyChange = (e) => {
        this.setState({ body: e.target.value });
    }

    handleAuthorChange = (e) => {
        this.setState({ author: e.target.value });
    }

    handleSubmit = (e) => { 
        e.preventDefault();
        const uuidv1 = require('uuid/v1');       
        const postBody = {
            id: uuidv1(),
            timestamp: Date.now(),
            body: this.state.body,
            author: this.state.author,
            parentId: this.props.parentId
        };
        this.props.addComment(postBody);
        this.onCloseModal();
    }

    render(){
        const { openModal } = this.state;
        return(
            <div className="container">
            <button onClick={this.onOpenModal}>Add new Commnet</button>
            <Modal open={openModal} onClose={this.onCloseModal} little>
            <h3>Add new comment</h3>
                <form className="needs-validation" noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="bodyPost">Body:</label>
                            <input type="text" className="form-control" id="bodyPost" placeholder="Body post"
                                required value={this.state.body} onChange={this.handleBodyChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="authorPost">Author:</label>
                            <input type="text" className="form-control" id="authorPost" placeholder="Author post"
                                required value={this.state.author} onChange={this.handleAuthorChange} />
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
        addComment: (data) => dispatch(addComment(data)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewComment);
