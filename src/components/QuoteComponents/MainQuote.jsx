import React from "react";
import { connect } from "react-redux";

export function MainQuote(props) {
  return (
    <div className="card " style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <div className="col-md-4 text-center">
          <img
            src="https://source.unsplash.com/random"
            className="card-img"
            alt="..."
          />
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">Quote for today:</h5>
            <p className="card-text">{props.quote}</p>
            <p className="card-text">
              <small className="text-muted">{props.author}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  quote: state.quoteReducer.mainQuote.quote,
  author: state.quoteReducer.mainQuote.author
});

export default connect(
  mapStateToProps,
  null
)(MainQuote);
