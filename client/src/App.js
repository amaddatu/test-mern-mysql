import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./Rover.scss";
import Home from './pages/Home'; //???
import About from './pages/About'; //???
import Error from './pages/Error'; //???
import Game from './pages/Game'; //???
import SignUp from './pages/SignUp'; //???
import Search from './pages/Search'; //???
import ThankYouForRegistering from './pages/ThankYouForRegistering';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/search" component={Search} />
            <Route path="/game" render={
              (props) => <Game {...props} test="mayo" />
            } />
            <Route exact path="/thank-you" component={ThankYouForRegistering} />
            <Route exact path="/search/:term" component={Search} />
            <Route component={Error} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
