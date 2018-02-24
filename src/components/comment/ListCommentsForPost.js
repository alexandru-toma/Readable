import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCommentsByPost, voteComments } from '../../actions';
import DisplayComment from './DisplayComment';
import AddNewComment from './AddNewComment';

class ListCommentsForPost extends Component {
  

    render() {
        const { comments, voteComments } = this.props
 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Comments...</h3>
                    </div>
                    <div className="col-md-6">
                        <AddNewComment parentId={this.props.parentId}/>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul>
                            {comments.map(comment =>
                                <li key={comment.id}><DisplayComment comment={comment} voteComments={voteComments} /></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.commentReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        voteComments: (id, typeOfVote) => dispatch(voteComments(id, typeOfVote))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListCommentsForPost);
