import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="log">
          <spam className="nav-log">Nav /</spam>
          <spam className="bar">bar</spam>
        </div>
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quote">Quote</Link>
        </div>
      </div>
    );
  }
}
