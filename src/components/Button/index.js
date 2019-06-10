import React, { Component } from 'react';

class Button extends Component {
  render() {
    const bootstrapClassName = `btn ${this.props.bootstrapClassName}`;
    return (
        this.props.disabled === "YES" 
         ? <button type="button" className={ bootstrapClassName } disabled>{ this.props.text }</button>
         : <button type="button" className={ bootstrapClassName }>{ this.props.text }</button>
    );
  }
}

export default Button;