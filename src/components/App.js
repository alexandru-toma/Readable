import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux'
import { getCategories,  getPosts } from '../actions'
import ListPost from "./post/ListPost";
import { Link } from "react-router-dom";

class App extends Component {
  componentWillMount() {
    const { getCategories, getAllPosts } = this.props;
    getAllPosts();
    getCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <div className="jumbotron">
          <h2 className="page-header">All categories</h2>
          <ul className="list-group">
            {categories && categories.map((category) =>
              <li key={category.name} className="list-group-item">
                <Link to={`${category.path}`}>
                  <b>{category.name}</b>
                </Link>
              </li>)}
          </ul>
        </div>
        <div className="all-posts">
          <h2 className="page-header">All Posts</h2>
          <ListPost/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(getCategories()),
    getAllPosts: () => dispatch(getPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
