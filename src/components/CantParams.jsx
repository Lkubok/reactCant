import React, { Component } from "react";
import { connect } from "react-redux";
import { updateLeftEdge, updateRightEdge } from "../actions";

export class CantParams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLeftOk: true,
      isRightOk: true,
      leftSlope: 0,
      rightSlope: 0
    };
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleCheck(e) {
    const { name } = e.target;
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
            value={this.props.leftSlope}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="rightSlope">Slope on the right Edge</label>
          <input
            type="text"
            className="form-control"
            id="rightSlope"
            disabled={true}
            value={this.props.rightSlope}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  profileSlope: state.cantReducer.profileSlopeValue,
  additionalSlope: state.cantReducer.additionalSlopeValue,
  rightSlope: state.paramsReducer.rightEdgeSlope,
  leftSlope: state.paramsReducer.leftEdgeSlope
});

const mapDispatchToProps = dispatch => ({
  updateLeftEdge: arg => dispatch(updateLeftEdge(arg)),
  updateRightEdge: arg => dispatch(updateRightEdge(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CantParams);
