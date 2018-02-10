import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>Project start</div>
    );
  }
}

function mapStateToProps () {

  return {}
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
