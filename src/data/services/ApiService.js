export class ApiService {
    // _url = 'http://jsonplaceholder.typicode.com/users';
    _users = 'https://jsonplaceholder.typicode.com/users';
    _posts = 'https://jsonplaceholder.typicode.com/posts';
    _comments = 'https://jsonplaceholder.typicode.com/comments';

    async getUsers() {
        return (await fetch(this._users)).json();
        // let users = await fetch(this._url);
        // let result = users.json();
        // return result;
    }

    async getPosts() {
        return (await fetch(this._posts)).json();
    }

    async getComments() {
        return (await fetch(this._comments)).json();
    }

    // async getUserById(id) {
    //     return (await fetch('${this._url}/${id}')).json();
    // };
}