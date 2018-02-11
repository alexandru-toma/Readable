import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux'
import { getCategories } from '../actions'

class App extends Component {
  componentWillMount() {
    const { getCategories } = this.props
    getCategories();
  }

  render() {
    const { categories } = this.props
    return (
      <div>
        <div>Project dsadstart</div>
        <div>{categories.map((category) => category.name)}</div>
      </div>
    );
  }   
}

function mapStateToProps(state) {
  return {
    categories: state.categoryReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
      getCategories: () => dispatch(getCategories())
  } 
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)
