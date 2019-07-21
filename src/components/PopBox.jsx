import React, { Component } from "react";
import { connect } from "react-redux";
import "./PopBox.css";
import * as selectors from "../reducers/selectors";

export class PopBox extends Component {
  renderPopUps = () => {
    return this.props.tasks.map(el => (
      <div key={el.id} className="pop-item">
        {el.task}
      </div>
    ));
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

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopBox);
