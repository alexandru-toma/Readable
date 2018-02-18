import React, {Component} from 'react'
import {getPostsByCategory} from '../actions';
import { connect } from 'react-redux';
import ListPost from './post/ListPost';

class CategoryView extends Component {
    componentWillMount(){
        const { getPostsByCategory } = this.props
        getPostsByCategory(this.props.match.params.category);
    }

    render(){
        return (
            <div>
                <h1>{this.props.match.params.category}</h1>
                <ListPost/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        postsPerCategory: state.postReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPostsByCategory: (category) => dispatch(getPostsByCategory(category))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryView);