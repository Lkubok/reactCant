import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { updateLeftEdge, updateRightEdge } from "../actions";
import * as selectors from "../reducers/selectors";

export class CantParams extends PureComponent {
  checkEdgeSlope = side => {
    if (side === "right")
      return Math.sign(this.props.rightSlope) ===
        Math.sign(this.props.mainSlope)
        ? "alert-success"
        : "alert-danger";
    return Math.sign(this.props.leftSlope) === Math.sign(this.props.mainSlope)
      ? "alert-success"
      : "alert-danger";
  };
  render() {
    return (
      <div className="form-row">
        <div className="form-group col-md-6">
          <p className="text-center">Slope on the left edge</p>
          <div className={`form-control ${this.checkEdgeSlope("left")}`}>
            {this.props.leftSlope}
          </div>
        </div>
        <div className="form-group col-md-6">
          <p className="text-center">Slope on the right edge</p>
          <div className={`form-control ${this.checkEdgeSlope("right")}`}>
            {this.props.rightSlope}
          </div>
        </div>
      </div>
    );
  }
}

//SELECTORS USAGE

const mapStateToProps = (state, ownProps) => ({
  rightSlope: selectors.sideSlopeSelector(state, "right"),
  leftSlope: selectors.sideSlopeSelector(state, "left"),
  mainSlope: selectors.getProfileSlopeValue(state)
});

const mapDispatchToProps = dispatch => ({
  updateLeftEdge: arg => dispatch(updateLeftEdge(arg)),
  updateRightEdge: arg => dispatch(updateRightEdge(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CantParams);
