import React, { Component } from 'react';
import axios from "axios";

import Table from "../../components/Table";
import "./style.css";

class TicketList extends Component {
  constructor( props ) {
      super( props );
      this.state = {};
  }

  // async and await in componentDidMount is not good practice, the best place for it is in Redux, which is not using in here
  // Thereforce, async and await here to help testing axios mock data from API
  async componentDidMount() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_CORS}${process.env.REACT_APP_PROXY}api/v2/tickets.json`, {
        auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD
        }
      });
      this.setState({
        tickets: response.data
      });
    } catch (e) {
      window.alert("Sorry! Something went wrong. Because of " + e);
    }
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

export default TicketList;