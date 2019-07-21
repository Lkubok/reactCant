import React, { Component } from "react";
import { connect } from "react-redux";

export class PopTask extends Component {
  render() {
    return <div>POPTASK BUTTON HERE</div>;
  }
}

export default connect(
  null,
  null
)(PopTask);
