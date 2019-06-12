import React, { Component } from 'react';

import Button from "../../components/Button";

// NotFound class component
class NotFound extends Component {
    
    constructor( props ) {
        
        super( props );
        this.state = {};
        
    }
    
    // Render function to render elements on Dom
    render() {
        
        return (
            
            <div className="container mt-5">
            
                <p className="h5 mb-3">Ooops not found, are you going to hire me so these kind of issues won't happen? ^-^</p>
                
                <a href="/tickets">     
                
                    <Button bootstrapClassName="btn-primary" text="Home"/>
                    
                </a>
                
            </div>
        );
    };
};

export default NotFound;