import React, { Component } from 'react';
import axios from "axios";

import Table from "../../components/Table";
import "./style.css";

class TicketList extends Component {
  constructor( props ) {
      super( props );
      this.state = {
        page: 1,
        numberOfPage: 1
      };
  }

  // async and await in componentDidMount is not good practice, the best place for it is in Redux, which is not using in this application.
  // Thereforce, async and await here to help testing axios mock data from API
  async componentDidMount() {
    try {
      // Using parameter sort_by=created_at to keep newest ticket at the last page, in order to avoid data inaccurate
      const response = await axios.get(`${process.env.REACT_APP_CORS}${process.env.REACT_APP_PROXY}api/v2/tickets.json?page=${ this.state.page }&per_page=25&sort_by=created_at`, {
        auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD
        }
      });
      // Calculate number of page for all tickets available
      let numberOfPage = Math.ceil(response.data.count / 25);
      // Set state data
      this.setState({
        tickets: response.data,
        numberOfPage
      });
    } catch (e) {
      window.alert("Sorry! Something went wrong. Because of " + e);
    }
  }

  render() {
    return (
      <div className="container table-responsive mg-top-10">
        <div className="mb-3">
          <span className="h2">List all tickets</span>
          <span className="h3 float-right">Page: { this.state.page } / { this.state.numberOfPage }</span>
        </div>
        <Table tickets={this.state.tickets}/>
      </div>
    );
  }
}

export default TicketList;