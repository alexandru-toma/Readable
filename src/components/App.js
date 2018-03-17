import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts';
import { getCategories } from '../actions/categories';
import ListPost from "./post/ListPost";
import DisplayCategories from "./categories/DisplayCategories";

class App extends Component {
  componentDidMount() {
    const { getCategories, getAllPosts } = this.props;
    getAllPosts();
    getCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <DisplayCategories categories={categories}/>
        <div className="all-posts">
          <h2 className="page-header">All Posts</h2>
          <ListPost/>
        </div>
      </div>
    );
  }
}

function mapStateToProps({categoryReducer}) {
  return {
    categories: categoryReducer,
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
