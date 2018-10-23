import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
// import './Custom.css';

class Game extends Component {
  componentDidMount = () => {
      console.log(this.props);
  }
  render() {
    return (
        <Fragment>
      <p>Game</p>
          <ul>
              <li><Link to="/game/chat">Chat</Link></li>
              <li><Link to="/game/leader">Leaderboard</Link></li>
              <li><Link to="/game/challenges">Challenges</Link></li>
          </ul>
          <Route exact path={`${this.props.match.url}/chat`} render={
              (props) => <p>Section: Chat Blah Blah Blah</p>
          } />
          <Route exact path={`${this.props.match.url}/leader`} render={
              (props) => <p>Section: Leaderboard</p>
          } />
          <Route exact path={`${this.props.match.url}/challenges`} render={
              (props) => <p>Section: Challenges</p>
          } />
    </Fragment>
    );
  }
}

export default Game;