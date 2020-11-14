import React, { Component } from 'react';
import { ApiService } from '../../data/services/ApiService';
import Comment from '../comment/Comment';

class Comments extends Component {
    api = new ApiService();
    state = {comments: []};

    async componentDidMount() {
        this.setState({comments: await this.api.getComments()})
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map(comment => (<Comment comment={comment} key={comment.id}/>))
                }
            </div>
        );
    }
}

export default Comments;