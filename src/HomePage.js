import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/Desktop">桌機版本</Link><br />
          </li>
          <li>
            <Link to="/Mobile">手機版本</Link><br />
          </li>
          <li>
            <Link to="/Tablet">平版版本</Link><br />
          </li>
        </ul>
      </div>
    )
  }
}
