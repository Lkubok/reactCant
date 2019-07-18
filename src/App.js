import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cant from "./components/Cant";
import About from "./components/About";
import Quote from "./components/Quote";
import NotFoundPage from "./components/NotFound";
import { connect } from "react-redux";
import { updateQuoteTwo } from "./actions";

export class App extends Component {
  componentDidMount() {
    this.props.updateQuoteTwo();
  }
  render() {
    return (
      <Router>
        <Header />
        <Navbar />
        <Main>
          <Switch>
            <Route path={"/cant"} component={Cant} />
            <Route path={"/about"} component={About} />
            <Route path={"/quote"} component={Quote} />

            <Route
              exact
              path={"/"}
              component={() => <Redirect to="/about" />}
            />
            <Route path="*" component={NotFoundPage} />
          </Switch>
          {/* <div>i9i9i9</div>  ADD ELEMENTS TO CLICK*/}
        </Main>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  updateQuoteTwo
};

export default connect(
  null,
  mapDispatchToProps
)(App);
