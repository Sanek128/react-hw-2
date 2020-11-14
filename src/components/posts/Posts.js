import React, { Component } from 'react';
import { ApiService } from '../../data/services/ApiService';
import Post from '../post/Post';

class Posts extends Component {

    api = new ApiService();
    state = { posts: []};

    async componentDidMount() {
        this.setState({posts: await this.api.getPosts()})
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => (<Post post={post} key={post.id}/>))
                }
            </div>
        );
    }
}

export default Posts;