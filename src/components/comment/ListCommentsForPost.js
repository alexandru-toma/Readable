import React, { Component } from 'react'
import { connect } from 'react-redux';
import { voteComments, deleteComment } from '../../actions';
import DisplayComment from './DisplayComment';
import AddNewComment from './AddNewComment';

class ListCommentsForPost extends Component {
    render() {
        const { comments, voteComments, deleteComment } = this.props

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="page-header">All comments</h3>
                    </div>
                    <div className="col-md-6">
                        <AddNewComment parentId={this.props.parentId} />
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            {comments.map(comment =>
                                ((comment.deleted === false) ?
                                    (<li key={comment.id} className="list-group-item">
                                        <DisplayComment
                                            comment={comment}
                                            voteComments={voteComments}
                                            deleteComment={deleteComment}
                                        />
                                    </li>) : '')
                            )
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
        voteComments: (id, typeOfVote) => dispatch(voteComments(id, typeOfVote)),
        deleteComment: (id) => dispatch(deleteComment(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListCommentsForPost);
