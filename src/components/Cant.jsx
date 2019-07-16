import React, { Component } from "react";
import {
  updateProfileSlopeValue,
  updateOffsetValue,
  updateNormalCrown,
  updateFullCrown,
  updateLengthOfCant
} from "../actions";
import { connect } from "react-redux";

export class Cant extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }
  handleOnChange(e) {
    let { type, name, value } = e.target;
    value = parseFloat(value);
    console.log(value);
    if (name === "mainSlope") this.props.changeProfileSlope(value);
    if (name === "laneOffset") this.props.changeOffsetValue(value);
    if (name === "normalCrown") this.props.updateNormalCrown(value);
    if (name === "fullCrown") this.props.updateFullCrown(value);
    if (name === "lengthOfCant") this.props.updateLengthOfCant(value);
  }
  handleCalculate() {
    const {
      profileSlopeValue: profile,
      laneOffsetValue: lane,
      normalCrownSlope: normal,
      fullSuperSlope: full,
      lengthOfCant: length
    } = this.props;
    console.log(profile, lane, normal, full, length);
    return ((Math.abs(normal) + Math.abs(full)) * lane) / length;
  }
  render() {
    return (
      <form className="mt-5">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="mainSlope">
              Main profile slope in %: (up is +, down is -)
            </label>
            <input
              onChange={this.handleOnChange}
              value={this.props.profileSlopeValue}
              type="number"
              step="0.1"
              max="15"
              min="-15"
              className="form-control"
              name="mainSlope"
              id="mainSlope"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="laneOffset">
              Offset to edge of lane from rotation axis [m]
            </label>
            <input
              onChange={this.handleOnChange}
              value={this.props.laneOffsetValue}
              type="number"
              step="0.1"
              className="form-control"
              name="laneOffset"
              id="laneOffset"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="normalCrown">
              Normal Crown Slope [%] (- is down)
            </label>
            <input
              onChange={this.handleOnChange}
              value={this.props.normalCrownSlope}
              type="number"
              step="0.1"
              max="15"
              min="-15"
              className="form-control"
              name="normalCrown"
              id="normalCrown"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="fullCrown">Full Super Slope [%]</label>
            <input
              onChange={this.handleOnChange}
              value={this.props.fullSuperSlope}
              type="number"
              step="0.1"
              className="form-control"
              name="fullCrown"
              id="fullCrown"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="lengthOfCant">Length of Cant [m]</label>
            <input
              onChange={this.handleOnChange}
              value={this.props.lengthOfCant}
              type="number"
              step="0.1"
              className="form-control"
              name="lengthOfCant"
              id="lengthOfCant"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="additionalSlope">Additional slope on Edges</label>
          <input
            type="text"
            className="form-control"
            id="additionalSlope"
            disabled={true}
            value={this.handleCalculate()}
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  profileSlopeValue: state.cantReducer.profileSlopeValue,
  laneOffsetValue: state.cantReducer.laneOffsetValue,
  additionalSlopeValue: state.cantReducer.additionalSlopeValue,
  normalCrownSlope: state.cantReducer.normalCrownSlope,
  fullSuperSlope: state.cantReducer.fullSuperSlope,
  lengthOfCant: state.cantReducer.lengthOfCant
});

const mapDispatchToProps = dispatch => ({
  changeProfileSlope: arg => dispatch(updateProfileSlopeValue(arg)),
  changeOffsetValue: arg => dispatch(updateOffsetValue(arg)),
  updateNormalCrown: arg => dispatch(updateNormalCrown(arg)),
  updateFullCrown: arg => dispatch(updateFullCrown(arg)),
  updateLengthOfCant: arg => dispatch(updateLengthOfCant(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cant);
