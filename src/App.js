import React, { Component } from 'react';


class App extends Component {
  state = {users: []}
  componentDidMount() {
    fetch(`${process.env.REACT_APP_CORS}${process.env.REACT_APP_PROXY}api/v2/tickets.json`, {
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