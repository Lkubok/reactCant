import React, { Component } from "react";
import { connect } from "react-redux";
import "./PopBox.css";
import { addTask, removeTask } from "../actions";

export class PopBox extends Component {
  renderPopUps = callback => {
    return this.props.tasks.map(el => (
      <div key={el.id} onClick={this.handleRemove} className="pop-item">
        {el.task}
      </div>
    ));
    // console.log(this.props.tasks);
  };
  handleRemove = e => {
    console.log(e.target);
    console.log(e.target);
    const { key } = e.target;
    this.props.remove(key);
  };
  render() {
    return (
      <div className={this.props.tasks.length > 0 ? "pop-box" : "display-none"}>
        TASKS:
        {this.renderPopUps()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  tasks: state.taskReducer.tasks
});

const mapDispatchToProps = dispatch => ({
  add: args => dispatch(addTask(args)),
  remove: args => dispatch(removeTask(args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopBox);
