import React, { Component } from "react";
import { connect } from "react-redux";
// import { addTask, removeTask } from "../actions";
import { addAndDelete } from "../actions";

export class PopTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskValue: "",
      time: 3
    };
  }
  handleClick = () => {
    this.props.addAndDelete(this.state.taskValue, this.state.time);
    this.setState({ taskValue: "" });
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
        <div className="form-row">
          <div className="form-group col-md-12 mt-3">
            <p className="alert alert-light">Type your side notes:</p>
            <input
              className="form-control"
              value={this.state.taskValue}
              onChange={this.handleChange}
              type="text"
              name="taskValue"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12 mt-3">
            <p className="alert alert-light">
              Choose time to delete the note: [s]
            </p>
            <input
              className="form-control"
              value={this.state.time}
              onChange={this.handleChange}
              type="number"
              name="time"
              min="3"
              max="1000"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="container d-flex flex-column justify-content-center p-0">
            <button className="btn btn-secondary" onClick={this.handleClick}>
              Add note
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
  addAndDelete
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopTask);
