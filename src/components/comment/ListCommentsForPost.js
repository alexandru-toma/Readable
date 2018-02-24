import React, {Component} from 'react'
import { connect } from 'react-redux';
import { getCommentsByPost, voteComments} from '../../actions';
import DisplayComment from './DisplayComment';

class ListCommentsForPost extends Component {

    componentWillMount() {

    }
   
    render(){
        const { comments, voteComments } = this.props
        return(
            <div className="container">
                <h3>Comments...</h3>
                <ul>
                    {comments.map(comment => 
                    <li key={comment.id}><DisplayComment comment={comment} voteComments={voteComments}/></li>)
                    }
                </ul>
            </div>
        )
    }  
}

function mapStateToProps(state) {
    return {
        comments: state.commentReducer,
        post: state.postReducer
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
