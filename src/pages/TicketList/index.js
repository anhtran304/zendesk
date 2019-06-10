import React, { Component } from 'react';
import axios from "axios";

import Table from "../../components/Table";
import Button from "../../components/Button";

class TicketList extends Component {
  constructor( props ) {
      super( props );
      this.state = {
        page: 1,
        numberOfPage: 1
      };
      this.getTickets = this.getTickets.bind(this);
  }

  // async and await inside componentDidMount is not good practice, the best place for it is in Redux, which is not using in this application.
  // Thereforce, async and await need to keep in here to help testing axios get data from API
  async getTickets(page) {
    try {
      // Using parameter sort_by=created_at to keep newest ticket at the last page, in order to avoid data inaccurate
      const response = await axios.get(`${process.env.REACT_APP_CORS}${process.env.REACT_APP_PROXY}api/v2/tickets.json?page=${ page }&per_page=${ process.env.REACT_APP_TICKETS_PER_PAGE }&sort_by=created_at`, {
        auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD
        }
      });
      // Calculating number of page for all tickets available
      let numberOfPage = Math.ceil( response.data.count / process.env.REACT_APP_TICKETS_PER_PAGE );
      // Set data to state
      this.setState({
        tickets: response.data,
        numberOfPage: numberOfPage
      });
    } catch (e) {
      window.alert("Sorry! Something went wrong. Because of " + e);
    }
  }

  componentDidMount() {
    return this.getTickets(this.state.page);
  }

  render() {
    return (
      <div className="container table-responsive my-5">
        <div className="mb-3 d-block">
          <span className="h2">List all tickets</span>
          <span className="h3 float-right">Page: { this.state.page } / { this.state.numberOfPage }</span>
        </div>
        <Table tickets={this.state.tickets}/>
        {/* <div className="mt-3 d-block">
          <span className="h3 float-right">Page: { this.state.page } / { this.state.numberOfPage }</span>
        </div> */}
        <div className="mt-3">
          <Button bootstrapClassName="btn-primary" text="Previous"/>
          <Button bootstrapClassName="btn-primary float-right" text="Next" disabled="YES"/>
        </div>
      </div>
    );
  }
}

export default TicketList;