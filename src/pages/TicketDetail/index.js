import React, { Component } from 'react';

class TicketDetail extends Component {
  constructor( props ) {
      super( props );
      this.state = {
        tickets: []
      };
  }
  
//   componentDidMount() {
//     fetch(`${process.env.REACT_APP_CORS}${process.env.REACT_APP_PROXY}api/v2/tickets.json`, {
//       method: 'get',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': process.env.REACT_APP_API_KEY
//       }
//     })
//     .then(res => res.json())
//     .then(tickets => {
//         this.setState({
//             tickets: tickets
//         });
//     })
//     .catch((e) => alert("Sorry! Something went wrong. Because of " + e));
//   }

  render() {
    // console.log(this.props.match.params.id);
    return (
      <div className="container mg-top-10">
        <p className="h2">Ticket detail</p>
        {/* <Table tickets={this.state.tickets}/> */}
      </div>
    );
  }
}

export default TicketDetail;