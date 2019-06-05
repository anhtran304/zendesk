import React, { Component } from 'react';
// import { Link, BrowserRouter as Router } from 'react-router-dom';

const TableBody = props => { 
    let returnBody = [];
    console.log(props.tickets);
    props.tickets.forEach(ticket => {
        returnBody.push(
            <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
                <td>john@example.com</td>
                <td>john@example.com</td>
                <td>john@example.com</td>
                <td>john@example.com</td>
            </tr> 
        )
    })
    return returnBody;
}

// Table class component
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <table className="table table-bordered table-hover">
                <thead className="thead-light">
                <tr>
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
                    <TableBody tickets={this.props.tickets} />
                    {/* <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>john@example.com</td>
                        <td>john@example.com</td>
                        <td>john@example.com</td>
                        <td>john@example.com</td>
                    </tr> */}
                </tbody>
            </table>
        );
  }
}

export default Table;