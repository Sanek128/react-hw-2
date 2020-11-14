import React, { Component } from 'react';
import { ApiService } from '../../data/services/ApiService';
import User from '../user/User';


class Users extends Component {
    api = new ApiService();

    // constructor(props) {
    //     super(props);
    // }

    state = {users: []};
    
    async componentDidMount() {
        // let users = await this.api.gerUsers();
        this.setState({users: await this.api.getUsers()});

    }

    render() {
        return (

            <div>
                {
                this.state.users.map(user => (<User user={user} key={user.id}/>))
                
                }
               
            </div>
        );
    }
}

export default Users;