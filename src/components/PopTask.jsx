import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask, removeTask } from "../actions";

export class PopTask extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      taskValue: ""
    };
  }
  handleClick() {
    this.props.add(this.state.taskValue);
    this.setState({ taskValue: "" });
  }
  handleChange(e) {
    const { value } = e.target;
    this.setState({ taskValue: value });
  }
  render() {
    return (
      <>
        <input
          value={this.state.taskValue}
          onChange={this.handleChange}
          type="text"
        />
        <button onClick={this.handleClick}>POPTASK BUTTON HERE</button>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  add: args => dispatch(addTask(args)),
  remove: args => dispatch(removeTask(args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopTask);
