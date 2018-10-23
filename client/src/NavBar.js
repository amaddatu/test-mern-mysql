import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import ChallengeImage from "./images/challenges.png";
// import './Custom.css';

class NavBar extends Component {
    
  render() {
    return (
        <Fragment>
            <h1>Pupster</h1>
            <ul>
                <li>
                    <Link to="/" className="navlink">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <img src={ChallengeImage} alt="Challenges" className="navIcon" width="30" height="30" />
                    </Link>
                </li>
                <li>
                    <Link to="/signup" className="navlink">
                        Sign Up
                    </Link>
                </li>
                <li>
                    <Link to="/search" className="navlink">
                        Search
                    </Link>
                </li>
                
                <li>
                    <Link to="/game" className="navlink">
                        Game
                    </Link>
                </li>
            </ul>
        </Fragment>
    );
  }
}

export default NavBar;