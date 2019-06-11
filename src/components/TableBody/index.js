import React, { Component } from 'react';
import './style.css';

// TableBody component take tieckets data from props and loop through tickets data to render each ticket
class TableBody extends Component {
    constructor( props ) {
        super( props );
        this.state = {};
    };

    // Handle click event on each row
    handleClick = ( id ) => {
        window.location =  `tickets/${id}`;
    };

    // Render function to render elements on Dom
    render() {
        let returnBody = []; // Variable array to return mutil row of table
        if ( this.props.tickets ) {
            if ( this.props.tickets.tickets ) {
                let tickets = this.props.tickets.tickets;
                if ( tickets.length > 0 ) {
                    // Loop through tickets array to create each row in table
                    tickets.forEach( ticket => {
                        
                        // sub string description into small sentence to make table row more user friendly
                        let trimmedDescription = ticket.description.substr(0, 100);
                        trimmedDescription = trimmedDescription.substr(0, Math.min(trimmedDescription.length, trimmedDescription.lastIndexOf(" ")));

                        returnBody.push(
                            <tr className = "li-hover" key={ ticket.id } onClick={ this.handleClick.bind( null, ticket.id ) }>
                                <td>{ ticket.subject }</td>
                                <td>{ trimmedDescription } ...</td>
                                <td>{ ticket.priority }</td>
                                <td>{ ticket.status }</td>
                                <td>{ ticket.created_at }</td>
                                <td>{ ticket.updated_at }</td>
                            </tr> 
                        );
                    });
                };
            };
        };
        return returnBody;
    };
};

export default TableBody;