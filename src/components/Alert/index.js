import React, { Component } from 'react';

// Alert class component
class Alert extends Component {
    
    constructor( props ) {
        
        super( props );
        this.state = {};
        
    }
    
    // Render function to render elements on Dom
    render() {
        
        let returnMessage = null;
        
        if (this.props.message) 
            returnMessage = <p className="h5 text-danger">{this.props.message}</p>

        return (
            
            <div className="my-1">
            
                { returnMessage }
                
            </div>
        );
    };
};

export default Alert;