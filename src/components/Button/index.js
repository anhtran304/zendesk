import React, { Component } from 'react';

// Button class component
class Button extends Component {
  
  constructor(props) {
    
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
    
  };

  // Handle click event on button
  handleClick() {
    
    // if props.passClick not exist, then will not call back passClick function on Parent element
    if (this.props.passClick) {
      
      this.props.passClick();
      
    };
  };

  // Render function to render elements on Dom
  render() {
    
    // Variable to style the button
    const bootstrapClassName = `btn ${this.props.bootstrapClassName}`;
    
    return (
      
        // Set button to disabled button if needed 
        this.props.disabled === "YES" 
         ? <button type="button" 
            className={ bootstrapClassName } 
            disabled onClick={this.handleClick}>
            
              { this.props.text }
              
            </button>
         
         : <button 
            type="button" 
            className={ bootstrapClassName } 
            onClick={this.handleClick}>
            
              { this.props.text }
              
            </button>
    );
  };
};

export default Button;