import React, { Component } from "react";
import axios from "axios";

export default class Quote extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get("https://source.unsplash.com/random")
      .then(response => console.log(response));
  }

  render() {
    return (
      <div>
        QUOTE
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
    );
  }
}
