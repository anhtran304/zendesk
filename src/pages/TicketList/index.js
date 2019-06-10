import React, { Component } from 'react';
import axios from "axios";

import Table from "../../components/Table";
import Button from "../../components/Button";

// TicketList class component render Ticket list page
class TicketList extends Component {
  // Variable to prevent React setState on unmounted Component
  _isMounted = false;

  constructor( props ) {
      super( props );
      this.state = {
        page: 1,
        numberOfPage: 1,
        previousButtonDisabled: "YES",
        nextButtonDisabled: "NO"
      };
      this.handlePreviousButton = this.handlePreviousButton.bind(this);
      this.handleNextButton = this.handleNextButton.bind(this);
  };

  // Handle fuction for Previous button
  handlePreviousButton() {
    this.getTickets(this.state.page - 1);
  };

  // Handle fuction for Next button
  handleNextButton() {
    this.getTickets(this.state.page + 1);
  };

  // async and await inside componentDidMount is not good practice, the best place for it is in Redux, which is not using in this application.
  // Thereforce, async and await need to keep in here to help testing axios get data from API
  async getTickets(newPage) {
    try {
      // Using parameter sort_by=created_at to keep newest ticket at the last page, in order to avoid data inaccurate
      const response = await axios.get(`${process.env.REACT_APP_CORS}${process.env.REACT_APP_PROXY}api/v2/tickets.json?page=${ newPage }&per_page=${ process.env.REACT_APP_TICKETS_PER_PAGE }&sort_by=created_at`, {
        auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD
        }
      });
      // Calculating number of page needed to display all tickets available
      const numberOfPage = Math.ceil( response.data.count / process.env.REACT_APP_TICKETS_PER_PAGE );
      // Set data to state
      if (this._isMounted) {
        if (newPage === 1) {
          this.setState({
            previousButtonDisabled: "YES",
            nextButtonDisabled: "NO",
            page: newPage
          }); 
        } else if ( 1 < newPage && newPage < numberOfPage ) {
            this.setState({
              previousButtonDisabled: "NO",
              nextButtonDisabled: "NO",
              page: newPage
            });
        } else if ( newPage === numberOfPage ) {
            this.setState({
              previousButtonDisabled: "NO",
              nextButtonDisabled: "YES",
              page: newPage
            });
        };
        this.setState({
          tickets: response.data,
          numberOfPage: numberOfPage,
          count: response.data.count
        });
      };
    } catch (e) {
      window.alert("Sorry! Something went wrong. Because of " + e);
    };
  };

  componentDidMount() {
    this._isMounted = true;
    return this.getTickets(this.state.page);
  };

  componentWillUnmount() {
    this._isMounted = false;
  };

  // Render function to render elements on Dom
  render() {
    return (
      <div className="container table-responsive my-5">
        <div className="mb-3">
          <span className="h2">Number of tickets: {this.state.count} </span>
          <span className="h3 float-right">Page: { this.state.page } / { this.state.numberOfPage }</span>
        </div>
        <Table tickets={this.state.tickets}/>
        <div className="my-3 d-flex justify-content-between">
          <Button 
            bootstrapClassName="btn-primary" 
            text="Previous" 
            disabled={ this.state.previousButtonDisabled } 
            passClick={ this.handlePreviousButton }
            />
          <span className="h3 float-right">Page: { this.state.page } / { this.state.numberOfPage }</span>
          <Button 
            bootstrapClassName="btn-success float-right"
            text="Next" 
            disabled={ this.state.nextButtonDisabled } 
            passClick={ this.handleNextButton }
            />
        </div>
      </div>
    );
  };
};

export default TicketList;