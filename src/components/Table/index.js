import React, { Component } from 'react';
// import { Link, BrowserRouter as Router } from 'react-router-dom';

// TableBody component take tieckets data from props and loop through tickets data to render each ticket
const TableBody = props => { 
    let returnBody = []; // Variable array to return mutil row of table
    if ( props.tickets ) {
        if ( props.tickets.tickets ) {
            let tickets = props.tickets.tickets;
            if ( props.tickets.tickets.length > 0 ) {
                tickets.forEach( ticket => {
                    returnBody.push(
                        <tr key={ ticket.id }>
                            <td>{ ticket.id }</td>
                            <td>{ ticket.subject }</td>
                            <td>{ ticket.description }</td>
                            <td>{ ticket.priority }</td>
                            <td>{ ticket.status }</td>
                            <td>{ ticket.created_at }</td>
                            <td>{ ticket.updated_at }</td>
                        </tr> 
                    )
                })
            }
        }
    }
    return returnBody;
}

// Table class component
class Table extends Component {
    constructor( props ) {
        super( props );
        this.state = {};
    }
    render() {
        return (
            <table className="table table-bordered table-hover">
                <thead className="thead-light">
                <tr key="js-table-tickets">
                    {/* <th className="d-none">Url</th> */}
                    <th>Id</th>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                </tr>
                </thead>
                <tbody>
                    <TableBody tickets={ this.props.tickets } />
                </tbody>
            </table>
        );
  }
}

export default Table;