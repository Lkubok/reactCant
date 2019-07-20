import React from "react";

const styles = {
  backgroundImage: `url("background.jpg")`,
  backgroundPosition: "center bottom",
  backgroundSize: "cover",
  color: "white"
};

export default function Header() {
  return (
    <div style={styles} className="jumbotron jumbotron-fluid m-0">
      <div className="container">
        <h1 className="display-4">Super Elevation Utility</h1>
        <p className="lead">The basic checker for super elevation</p>
      </div>
    </div>
  );
}
