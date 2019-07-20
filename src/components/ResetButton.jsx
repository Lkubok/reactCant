import React, { Component } from "react";
import { connect } from "react-redux";
import { restoreAll2 } from "../actions";
import { initialParams } from "../reducers/initialParams";

export class ResetButton extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = e => {
    e.preventDefault();
    this.props.restore();
  };
  render() {
    return (
      <div className="container d-flex flex-column justify-content-center p-0">
        <button
          onClick={this.handleClick}
          className="btn btn-danger mt-4"
          disabled={true}
        >
          Restore to default values - Check it with BOB
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  restore: args => dispatch(restoreAll2(args))
});

export default connect(
  null,
  mapDispatchToProps
)(ResetButton);
