import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { restoreAll } from "../actions";
import * as selectors from "../reducers/selectors";
import { initialParams } from "../reducers/initialParams";

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
  checkMainSlopeValue = () => {
    return Math.abs(this.props.mainSlope) >=
      Math.abs(this.props.awaitedMainSlopeValue) ? (
      <div className="form-control alert-success">
        {this.props.awaitedMainSlopeValue} %
      </div>
    ) : (
      <div className="form-control alert-danger">
        {`Main slope is ${this.props.mainSlope} % but should be minimum 
        ${this.props.awaitedMainSlopeValue} %`}
      </div>
    );
  };
  handleReset = e => {
    e.preventDefault();
    this.props.restoreAll(initialParams);
  };
  render() {
    return (
      <>
        <div className="form-row">
          <div className="form-group col-md-6">
            <p className="text-center">Slope on the left edge [%]</p>
            <div className={`form-control ${this.checkEdgeSlope("left")}`}>
              {this.props.leftSlope}
            </div>
          </div>
          <div className="form-group col-md-6">
            <p className="text-center">Slope on the right edge [%]</p>
            <div className={`form-control ${this.checkEdgeSlope("right")}`}>
              {this.props.rightSlope}
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <p className="text-center">
              Main slope should be more or equal to: [%]{" "}
            </p>
            <>{this.checkMainSlopeValue()}</>
          </div>
        </div>
        <div className="container d-flex flex-column justify-content-center p-0">
          <button
            className="btn btn-danger mt-4 mb-4"
            onClick={this.handleReset}
          >
            Restore to default values
          </button>
        </div>
      </>
    );
  }
}

//SELECTORS USAGE

const mapStateToProps = (state, ownProps) => ({
  rightSlope: selectors.sideSlopeSelector(state, "right"),
  leftSlope: selectors.sideSlopeSelector(state, "left"),
  mainSlope: selectors.getProfileSlopeValue(state),
  additionalSlope: selectors.addEdgeSelector(state),
  awaitedMainSlopeValue: selectors.awaitedSlopeValue(state)
});

const mapDispatchToProps = {
  restoreAll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CantParams);
