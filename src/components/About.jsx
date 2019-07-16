import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center m-5">
          Tool for checking cants of edges of roads{" "}
        </h1>
        <h4 className="text-center m-5">
          Simply pass the data to inputs, and you will get info if cant is
          designed properly
        </h4>

        <h2 className="text-center m-5">Github repository: </h2>

        <h4 className="text-center m-5">
          <a
            className="text-center text-succes text-lowercase btn btn-light font-italic"
            href="https://github.com/Lkubok/reactCant"
            target="blank"
          >
            github.com/Lkubok/reactCant
          </a>
        </h4>
        <h2 className="text-center m-5">Contact with author: </h2>
        <h4 className="text-center m-5">
          <a
            className="text-center text-succes text-lowercase btn btn-light font-italic"
            href="mailto:lkubok@gmail.com"
          >
            Lkubok@gmail.com
          </a>
        </h4>
      </div>
    );
  }
}
