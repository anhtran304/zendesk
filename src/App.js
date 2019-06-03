import React, { Component } from 'react';
require('dotenv').config();

class App extends Component {
  state = {users: []}
  componentDidMount() {
    fetch(`${process.env.REACT_APP_CORS}${process.env.REACT_APP_PROXY}api/v2/job_statuses/36e5f8ca8e42ed397025b7c277b4fb8d.json`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.REACT_APP_API_KEY
      }
    })
    .then(res => res.json())
    .then(users => {
      console.log(users);
    })
    .catch((e) => alert("Sorry! Something went wrong. Because of " + e));
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
      </div>
    );
  }
}

export default App;