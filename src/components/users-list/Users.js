import React, { Component } from 'react';
import { users } from '../../data/data';
import User from '../user/User';
import './User.css';

class Users extends Component {
    render() {
        return (
            <div>
                {
                    users.map((userItem, index) => (<User currentUser = {userItem} keu = {index}/>))
                }
            </div>
        );
    }
}

export default Users;