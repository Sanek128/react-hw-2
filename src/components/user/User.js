import React, { Component } from 'react';

class User extends Component {
    render() {
        let {id, name, username, email} = this.props.user;
        return (
            // <div>
            //     {id} -- {name}
            // </div>
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{id}. {name} {username}</h4>
                        <p class="card-text">
                            {email}
                        </p>
                </div>
            </div>
        );
    }
}

export default User;

// import React, { Component } from 'react';
// import './User.css'

// class User extends Component {

//     state = {userStatus: this.props.currentUser.status};

//     changeStatus = (status) => {
//         // console.log(status);
//         console.log(this.state.userStatus);
//         this.setState({userStatus: !this.state.userStatus});
//     }

//     render() {
//         let {name, age, status} = this.props.currentUser;
//         return (
//                 // {name} -- {age} -- {status.toString()}
//             <div class="card">
//                 <div class="card-body">
//                     <h4 class="card-title">{name}</h4>
//                     <p class="card-text">
//                         {age} -- {this.state.userStatus.toString()}
//                     </p>
//                     {/* <a href="#!" class="btn btn-primary">Go somewhere</a> */}
//                     <button className="btn btn-primary" onClick={() => this.changeStatus(status)}>
//                         Change status
//                     </button>
//                 </div>
//             </div>

//         );
//     }
// }

// export default User;
