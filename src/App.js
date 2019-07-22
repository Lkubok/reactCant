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
import { updateQuoteTwo, updateAtLaunch } from "./actions";
import * as selectors from "./reducers/selectors";
// import { ResetButton } from "./components/ResetButton";
// import Settings from "./components/Settings";
import { ContactFormik } from "./components/Contact";
import PopTask from "./components/PopTask";
import PopBox from "./components/PopBox";

export class App extends Component {
  componentDidMount() {
    this.props.updateQuoteTwo();
    if (localStorage.getItem("full")) {
      const objWithUpdates = {
        full: parseFloat(localStorage.getItem("full")),
        length: parseFloat(localStorage.getItem("length")),
        normal: parseFloat(localStorage.getItem("normal")),
        lane: parseFloat(localStorage.getItem("lane")),
        profile: parseFloat(localStorage.getItem("profile")),
        speed: parseFloat(localStorage.getItem("speed"))
      };

      this.props.updateAtLaunch(objWithUpdates);
    }
  }
  componentDidUpdate() {
    const {
      fullSuperSlope: full,
      lengthOfCant: length,
      normalCrownSlope: normal,
      laneOffsetValue: lane,
      profileSlopeValue: profile,
      speed
    } = this.props;
    const itemToStore = {
      full: full,
      length: length,
      normal: normal,
      lane: lane,
      profile: profile,
      speed: speed
    };
    for (let property in itemToStore) {
      localStorage.setItem(property, itemToStore[property]);
    }
  }
  render() {
    return (
      <>
        <Router>
          <Header />
          <Navbar />
          <Main>
            <Switch>
              <Route path={"/cant"} component={Cant} />
              {/* <Route path={"/settings"} component={Settings} /> */}
              <Route path={"/about"} component={About} />
              <Route path={"/contact"} component={ContactFormik} />
              <Route path={"/quote"} component={Quote} />
              <Route path={"/notes"} component={PopTask} />

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
        {/* <ResetButton /> */}
        <PopBox />
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  fullSuperSlope: selectors.getFullSuperSlope(state),
  lengthOfCant: selectors.getLengthOfCant(state),
  normalCrownSlope: selectors.getNormalCrownSlope(state),
  laneOffsetValue: selectors.getLaneOffsetValue(state),
  profileSlopeValue: selectors.getProfileSlopeValue(state),
  speed: selectors.getDesignSpeedValue(state)
});

const mapDispatchToProps = {
  updateQuoteTwo,
  updateAtLaunch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
