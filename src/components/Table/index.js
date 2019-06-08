import React, { Component } from 'react';

import TableBody from '../TableBody';

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