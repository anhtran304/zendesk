import React, { Component } from 'react';
import { ClipLoader } from 'react-spinners';
import axios from "axios";

import Button from "../../components/Button";

// TicketDetail class component render Ticket detail page
class TicketDetail extends Component {
  // Variable to prevent React setState on unmounted Component
  _isMounted = false;

  constructor( props ) {
      super( props );
      this.state = {
        ticket: {}
      };
  };

  // async and await in componentDidMount is not good practice, the best place for it is in Redux, which is not using in here
  // Thereforce, async and await here to help testing axios mock data from API
  async componentDidMount() {
    this._isMounted = true;
    // const id = this.props.match.params.id;
    // Get id of ticket from window.location to pass the test, otherwise it will promt the error of undefined this.props.match
    const urlArray = window.location.toString().split("/");
    const id = urlArray[urlArray.indexOf("tickets") + 1];
    
    try {
      const response = await axios.get(`${process.env.REACT_APP_CORS}${process.env.REACT_APP_PROXY}api/v2/tickets/${id}.json`, {
        auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD
        }
      });
      if (this._isMounted) {
        this.setState({
          ticket: response.data.ticket,
          loading: false
        });
      };
    } catch (e) {
      if (!e.response) {
        window.alert("Sorry, please check your connection!");
      } else {
        // Http status code
        const statusCode = e.response.status;
        if (statusCode === 401) {
          window.alert("Sorry! You are unauthorized to perform this action!");
        } else if (statusCode === 404) {
          window.alert("Sorry! Ticket not found");
        } else {
          window.alert('Sorry', e.message);
        };
      };
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  };

  // Render function to render elements on Dom
  render() {
    return (
      <div className="container my-5">
        <p className="h2">Ticket detail</p>
        <hr/>
        <div className="d-flex justify-content-center mb-2">
          <ClipLoader
            sizeUnit={"px"}
            size={30}
            color={'#123abc'}
            loading={this.state.loading}
          />
        </div> 
        <p><strong>Subject: </strong>{this.state.ticket.subject}</p>
        <p><strong>Description: </strong>{this.state.ticket.description}</p>
        <p><strong>Priority: </strong>{this.state.ticket.priority}</p>
        <p><strong>Status: </strong>{this.state.ticket.status}</p>
        <p><strong>Created at: </strong>{this.state.ticket.created_at}</p>
        <p><strong>Updated at: </strong>{this.state.ticket.updated_at}</p>
        <hr/>
        <a href="/tickets" className="navbar-brand">        
          <Button bootstrapClassName="btn-primary" text="Home"/>
        </a>
      </div>
    );
  };
};

export default TicketDetail;