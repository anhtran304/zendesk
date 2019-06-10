import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // if props.passClick not exist, then will not call back passClick function on Parent element
    if (this.props.passClick) {
      this.props.passClick();
    }
  };

  render() {
    const bootstrapClassName = `btn ${this.props.bootstrapClassName}`;
    return (
        this.props.disabled === "YES" 
         ? <button type="button" className={ bootstrapClassName } disabled onClick={this.handleClick}>{ this.props.text }</button>
         : <button type="button" className={ bootstrapClassName } onClick={this.handleClick}>{ this.props.text }</button>
    );
  }
}

export default Button;