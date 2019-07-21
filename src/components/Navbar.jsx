import React from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="light" light expand="md">
        <div className="container">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavLink
                activeClassName="active"
                className={`nav-link pl-5 pr-5 `}
                to="/cant"
              >
                <li className={`nav-item `}>Utility</li>
              </NavLink>

              {/*          <NavLink
                activeClassName="active"
                className={`nav-link pl-5 pr-5 `}
                to="/settings"
              >
                <li className={`nav-item `}>Settings</li>
              </NavLink> */}

              <NavLink
                activeClassName="active"
                className={`nav-link pl-5 pr-5 `}
                to="/about"
              >
                <li className={`nav-item `}>About</li>
              </NavLink>
              <NavLink
                activeClassName="active"
                className={`nav-link pl-5 pr-5 `}
                to="/contact"
              >
                <li className={`nav-item `}>Contact</li>
              </NavLink>
              <NavLink
                activeClassName="active"
                className={`nav-link pl-5 pr-5 `}
                to="/quote"
              >
                <li className={`nav-item `}>Quotes</li>
              </NavLink>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
