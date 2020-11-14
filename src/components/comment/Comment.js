import React, { Component } from 'react';

class Comment extends Component {
    render() {
        let {id, name, email, body} = this.props.comment
        return (
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">({id}) {name} /{email}/</h4>
                        <p class="card-text">
                            {body}
                        </p>
                </div>
            </div>
        );
    }
}

export default Comment;