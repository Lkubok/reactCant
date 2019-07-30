import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTask } from "../actions";
import "./PopBox.css";
import * as selectors from "../reducers/selectors";

export class PopBox extends Component {
  renderPopUps = () => {
    return this.props.tasks.map(el => (
      <div key={el.id} onClick={this.handleRemove(el.id)} className="pop-item">
        {el.task}
        {el.id}
      </div>
    ));
  };
  handleRemove = id => () => {
    this.props.remove(id);
  };
  render() {
    return (
      <div className={this.props.tasks.length > 0 ? "pop-box" : "display-none"}>
        Side Notes:
        {this.renderPopUps()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  tasks: selectors.getTasksSelector(state)
});

const mapDispatchToProps = dispatch => ({
  remove: arg => dispatch(removeTask(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopBox);
