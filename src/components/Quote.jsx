import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addQuote, updateQuote } from "../actions";
import MainQuote from "./QuoteComponents/MainQuote";

export class Quote extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  handleChange() {
    this.fetchQuote();
  }

  fetchQuote() {
    axios
      .get("https://hangmann-backend.herokuapp.com/api/quotes/random")
      .then(response =>
        this.props.changeMainQuote(
          response.data[0].quote,
          response.data[0].quoteAuthor
        )
      );
  }

  render() {
    return (
      <div>
        <MainQuote />
        <button className="btn btn-light m-3" onClick={this.handleChange}>
          Change Main Quote
        </button>
      </div>
    );
  }
}

/* const mapStateToProps = (state, ownProps) => ({
  quote: state.quoteReducer.mainQuote,
  author: state.quoteReducer.author
}); */

const mapDispatchToProps = dispatch => ({
  changeMainQuote: (quote, author) => dispatch(updateQuote(quote, author)),
  addQuote: (quote, author) => dispatch(addQuote(quote, author))
});

export default connect(
  null,
  mapDispatchToProps
)(Quote);
