import React, { Component } from "react";
import { connect } from "react-redux";
import { updateQuoteTwo } from "../actions";
import MainQuote from "./QuoteComponents/MainQuote";

export class Quote extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.updateQuoteTwo();
  }

  render() {
    return (
      <div className="container d-flex flex-column justify-content-center">
        <MainQuote />
        <button className="btn btn-light m-3" onClick={this.handleChange}>
          Fetch new Quote 2
        </button>
      </div>
    );
  }
}

/* const mapStateToProps = (state, ownProps) => ({
  quote: state.quoteReducer.mainQuote,
  author: state.quoteReducer.author
}); */

const mapDispatchToProps = {
  updateQuoteTwo
};

export default connect(
  null,
  mapDispatchToProps
)(Quote);
