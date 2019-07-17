import React, { Component } from "react";
import { connect } from "react-redux";
import { updateLeftEdge, updateRightEdge, updateSide } from "../actions";

export class LeftRightSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value, type } = e.target;
    if (type === "radio") this.props.updateSide(value);

    console.log("changed");
  }
  render() {
    return (
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="leftSide">Curve to the left</label>
          <input
            type="radio"
            name="side"
            value="left"
            className="form-control"
            id="leftSide"
            checked={this.props.side === "left"}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="rightSide">Curve to the right</label>
          <input
            type="radio"
            name="side"
            value="right"
            className="form-control"
            id="rightSide"
            checked={this.props.side === "right"}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
const mapStateToPRops = (state, ownProps) => ({
  side: state.paramsReducer.side,
  leftEdgeSlope: state.paramsReducer.leftEdgeSlope,
  rightEdgeSlope: state.paramsReducer.rightEdgeSlope
});

const mapDispatchToProps = dispatch => ({
  updateLeftEdge: arg => dispatch(updateLeftEdge(arg)),
  updateRightEdge: arg => dispatch(updateRightEdge(arg)),
  updateSide: arg => dispatch(updateSide(arg))
});

export default connect(
  mapStateToPRops,
  mapDispatchToProps
)(LeftRightSelect);
