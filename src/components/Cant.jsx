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
  }
  handleOnChange(e) {
    let { type, name, value } = e.target;
    value = parseFloat(value);
    console.log(value);
    if (name === "mainSlope") this.props.changeProfileSlope(value);
    if (name === "laneOffset") this.props.changeOffsetValue(value);
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
              placeholder="2"
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
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="additionalSlope">Additional slope on Edges</label>
          <input
            type="text"
            className="form-control"
            id="additionalSlope"
            placeholder="1234 Main St"
            disabled={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
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
