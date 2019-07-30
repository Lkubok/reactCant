import React, { Component } from "react";

export default class Main extends Component {
  handleKeyPress = e => {
    e.preventDefault();
    console.log(e.key);
  };
  render() {
    const { children } = this.props;
    return (
      <div className="container" onKeyPress={this.handleKeyPress}>
        {children}
      </div>
    );
  }
}
