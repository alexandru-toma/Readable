import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux'
import { getCategories } from '../actions'
import { getPosts } from '../actions'
import NotFound from "./NotFound";
import { Link, Route } from "react-router-dom";


class App extends Component {
  componentWillMount() {
    const { getCategories, getAllPosts } = this.props
    getCategories();
    getAllPosts();
  }

  render() {
    const { categories, posts } = this.props
    return (
      <div>
        <div className="all-categories">
          <h2>All categories</h2>
          <ol>
            {categories && categories.map((category) =>
              <li key={category.name}>
                <Link to={`${category.path}`}>
                  <b>{category.name}</b>
                </Link>
              </li>)}
          </ol>
        </div>
        <div className="all-posts">
          <h2>All Posts</h2>
          <ol>
            {posts && posts.map((post) =>
              <li key={post.id}>{
                post.title}
              </li>)}
          </ol>
        </div>
        
      </div>
    );


  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryReducer,
    posts: state.postReducer
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
