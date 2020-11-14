import React, { Component } from 'react';

class Post extends Component {
    render() {
        let { id, title, body } = this.props.post
        return (
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{id} "{title}"</h4>
                        <p class="card-text">
                            {body}
                        </p>
                </div>
            </div>
        );
    }
}

export default Post;