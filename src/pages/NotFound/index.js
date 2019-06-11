import React, { Component } from 'react';

import Button from "../../components/Button";

// Table class component
class NotFound extends Component {
    constructor( props ) {
        super( props );
        this.state = {};
    }
    
    // Render function to render elements on Dom
    render() {
        return (
            <div className="container mt-5">
                <p className="h1">Not found</p>
                <a href="/tickets" className="navbar-brand">        
                    <Button bootstrapClassName="btn-primary" text="Home"/>
                </a>
            </div>
        );
    };
};

export default NotFound;