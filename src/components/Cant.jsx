import React, { Component } from "react";
import {
  updateProfileSlopeValue,
  updateOffsetValue,
  updateNormalCrown,
  updateFullCrown,
  updateLengthOfCant,
  updateDesignSpeed
} from "../actions";

import { connect } from "react-redux";
import CantParams from "./CantParams";
import LeftRightSelect from "./LeftRightSelect";
import * as selectors from "../reducers/selectors";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";

export class Cant extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e) {
    let { name, value } = e.target;
    value = parseFloat(value);
    if (name === "mainSlope") this.props.changeProfileSlope(value);
    if (name === "laneOffset") this.props.changeOffsetValue(value);
    if (name === "normalCrown") this.props.updateNormalCrown(value);
    if (name === "fullCrown") this.props.updateFullCrown(value);
    if (name === "lengthOfCant") this.props.updateLengthOfCant(value);
    if (name === "designSpeed") this.props.updateDesignSpeed(value);
  }

  handleOnChangeNew = callback => e => {
    let { value } = e.target;
    value = parseFloat(value);
    callback(value);
  };
  /*   handleCalculate() {
    const {
      profileSlopeValue: profile,
      laneOffsetValue: lane,
      normalCrownSlope: normal,
      fullSuperSlope: full,
      lengthOfCant: length
    } = this.props;
    console.log(profile, lane, normal, full, length);

    const addSlope = ((Math.abs(normal) + Math.abs(full)) * lane) / length;
    this.props.updateAdditionalSlope(addSlope); // IT HAPPENS TWICE... WHY  ????
    return addSlope;
  } */
  checkAddSlope = () => {
    const { designSpeed: speed, result } = this.props;
    if (speed >= 100)
      return result <= 0.9 && result >= 0.35 ? "alert-success" : "alert-danger";
    if (speed >= 80)
      return result <= 1.0 && result >= 0.35 ? "alert-success" : "alert-danger";
    if (speed >= 60)
      return result <= 1.6 && result >= 0.35 ? "alert-success" : "alert-danger";
    return result <= 2.0 && result >= 0.35 ? "alert-success" : "alert-danger";
  };
  render() {
    // const { values } = this.props;
    return (
      <>
        <Form className="mt-5">
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="mainSlope">
                Main profile slope in %: (up is +, down is -)
              </label>
              <input
                onChange={this.handleOnChangeNew(this.props.changeProfileSlope)}
                value={this.props.profileSlopeValue}
                type="number"
                step="0.01"
                max="15"
                min="-15"
                className="form-control"
                name="mainSlope"
                id="mainSlope"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="laneOffset">
                Offset to edge of lane from rotation axis [m]
              </label>
              <Field
                type="number"
                step="0.1"
                className="form-control"
                name="laneOffset"
                id="laneOffset"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="designSpeed">Design speed [km/h]</label>
              <Field
                type="number"
                step="10"
                min="30"
                max="120"
                className="form-control"
                name="designSpeed"
                id="designSpeed"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="normalCrown">
                Normal Crown Slope [%] (- is down)
              </label>
              <Field
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
              <Field
                type="number"
                step="0.1"
                className="form-control"
                name="fullCrown"
                id="fullCrown"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="lengthOfCant">Length of Cant [m]</label>
              <Field
                type="number"
                step="0.1"
                className="form-control"
                name="lengthOfCant"
                id="lengthOfCant"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="additionalSlope">
              Additional slope on Edges [%]
            </label>
            <div className={`form-control ${this.checkAddSlope()}`}>
              {this.props.result}
            </div>
          </div>
          <LeftRightSelect />
          <CantParams />
        </Form>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  result: selectors.addEdgeSelector(state, 1),
  fullSuperSlope: selectors.getFullSuperSlope(state),
  lengthOfCant: selectors.getLengthOfCant(state),
  normalCrownSlope: selectors.getNormalCrownSlope(state),
  laneOffsetValue: selectors.getLaneOffsetValue(state),
  profileSlopeValue: selectors.getProfileSlopeValue(state),
  designSpeed: selectors.getDesignSpeedValue(state)
});

const mapDispatchToProps = dispatch => ({
  changeProfileSlope: arg => dispatch(updateProfileSlopeValue(arg)),
  changeOffsetValue: arg => dispatch(updateOffsetValue(arg)),
  updateNormalCrown: arg => dispatch(updateNormalCrown(arg)),
  updateFullCrown: arg => dispatch(updateFullCrown(arg)),
  updateLengthOfCant: arg => dispatch(updateLengthOfCant(arg)),
  updateDesignSpeed: arg => dispatch(updateDesignSpeed(arg))
});

const FormikCant = withFormik({
  mapPropsToValues({
    profileSlopeValue,
    laneOffsetValue,
    designSpeed,
    normalCrownSlope,
    lengthOfCant,
    fullSuperSlope
  }) {
    return {
      mainSlope: profileSlopeValue,
      laneOffset: laneOffsetValue,
      designSpeed: designSpeed,
      normalCrown: normalCrownSlope,
      fullCrown: fullSuperSlope,
      lengthOfCant: lengthOfCant
    };
  },
  // validationSchema: Yup.object().shape({}),
  handleChange(values) {
    console.log(values);
    this.handleOnChange(values.name, values.value);
  }
})(Cant);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormikCant);
