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

export default class App extends Component {
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
            <Route path={"/not-found"} component={NotFoundPage} />
            <Route
              exact
              path={"/"}
              component={() => <Redirect to="/about" />}
            />
            <Redirect to={"/not-found"} />
          </Switch>
        </Main>
      </Router>
    );
  }
}
