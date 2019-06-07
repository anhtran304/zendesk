import React, { Component } from 'react';
import Table from "./components/Table";
import "./app.css";

class App extends Component {
  state = {tickets: []}
  componentDidMount() {
    fetch(`${process.env.REACT_APP_CORS}${process.env.REACT_APP_PROXY}api/v2/tickets.json`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.REACT_APP_API_KEY
      }
    })
    .then(res => res.json())
    .then(tickets => {
        this.setState({
            tickets: tickets
        });
    })
    .catch((e) => alert("Sorry! Something went wrong. Because of " + e));
  }

  render() {
    return (
      <div className="container table-responsive mg-top-10">
        <p className="h2">List all tickets</p>
        <Table tickets={this.state.tickets}/>
      </div>
    );
  }
}

export default App;