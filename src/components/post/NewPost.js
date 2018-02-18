import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, addNewPost } from '../../actions';

class NewPost extends Component {
    state = {
        title: "",
        body: "",
        author: "",
        category: ""
    }

    componentWillMount() {
        const { getCategories } = this.props
        getCategories();    
        
    }
    
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

    handleAuthorChange = (e) => {
        this.setState({ author: e.target.value });
    }

    handleCategoryChange = (e) => {
        this.setState({ category: e.target.value });
    }

    handleSubmit = (e) => { 
        e.preventDefault();
        const uuidv1 = require('uuid/v1');       
        const postBody = {
            id: uuidv1(),
            timestamp: Date.now(),
            title: this.state.title,
            body: this.state.body,
            author: this.state.author,
            category: this.state.category
        };
        this.props.addNewPost(postBody);
        this.props.history.push('/');
    }

    render() {
        const { categories } = this.props
        return (
            <div className="container">
                <h2>Add a new post</h2>
                <form className="needs-validation" noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="titlePost">Title:</label>
                        <input type="text" className="form-control" id="titlePost" placeholder="Title post"
                            required value={this.state.title} onChange={this.handleTitleChange} />
                    </div>
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
                    <select className="form-control" id={this.state.category} 
                        value={this.state.category} onChange={this.handleCategoryChange}>
                        <option value="noValue" disabled>Select category...</option>
                        {categories && categories.map(category =>
                            <option key={category.name} value={category.name}>
                                {category.name}
                            </option>
                        )}
                    </select>
                    <br></br>
                    <div className="row">
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categoryReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCategories: () => dispatch(getCategories()),
        addNewPost: (data) => dispatch(addNewPost(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPost);

