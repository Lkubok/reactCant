import React, { Component } from "react";
import { connect } from "react-redux";

export class CantParams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLeftOk: true,
      isRightOk: true
    };
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleCheck() {
    return 4;
  }
  render() {
    return (
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="leftSlope">Slope on the Left Edge</label>
          <input
            type="text"
            className="form-control"
            id="leftSlope"
            disabled={true}
            value={this.handleCheck}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="rightSlope">Slope on the right Edge</label>
          <input
            type="text"
            className="form-control"
            id="rightSlope"
            disabled={true}
            value={this.handleCheck}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  profileSlope: state.cantReducer.profileSlopeValue,
  additionalSlope: state.cantReducer.additionalSlopeValue
});

export default connect(
  mapStateToProps,
  null
)(CantParams);
