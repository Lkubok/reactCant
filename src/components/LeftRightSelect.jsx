import React, { Component } from "react";
import { connect } from "react-redux";
import { updateLeftEdge, updateRightEdge, updateSide } from "../actions";

export class LeftRightSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { value, type } = e.target;
    if (type === "radio") this.props.updateSide(value);
  }
  render() {
    return (
      <div>
        <div className="input-group pt-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input
                type="radio"
                aria-label="Curve To the left"
                name="side"
                value="left"
                id="left"
                checked={this.props.side === "left"}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <label
            htmlFor="left"
            type="text"
            className="form-control"
            aria-label="Text input with radio button"
          >
            Curve to the left
          </label>
        </div>
        <div className="input-group pt-4 pb-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input
                type="radio"
                aria-label="Curve to the right"
                name="side"
                value="right"
                id="right"
                checked={this.props.side === "right"}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <label
            htmlFor="right"
            type="text"
            className="form-control"
            aria-label="Text input with radio button"
          >
            Curve to the right
          </label>
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
