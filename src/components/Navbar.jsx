import React from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.changeActive = this.changeActive.bind(this);
    this.isActive = this.isActive.bind(this);
    this.state = {
      isOpen: false,
      active: ""
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  changeActive(activeElem) {
    this.setState({ active: activeElem });
  }
  isActive(elem) {
    return this.state.active === elem ? "active" : "";
  }
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Link
              onClick={() => this.changeActive("cant")}
              className={`nav-link pl-5 pr-5 ${this.isActive("cant")}`}
              to="/cant"
            >
              <li className={`nav-item `}>Cant Utility</li>
            </Link>

            <Link
              onClick={() => this.changeActive("about")}
              className={`nav-link pl-5 pr-5 ${this.isActive("about")}`}
              to="/about"
            >
              <li className={`nav-item `}>About</li>
            </Link>
            <Link
              onClick={() => this.changeActive("quote")}
              className={`nav-link pl-5 pr-5 ${this.isActive("quote")}`}
              to="/quote"
            >
              <li className={`nav-item `}>Good Quote for rest of day ;) </li>
            </Link>
          </Nav>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </Collapse>
      </Navbar>
    );
  }
}
