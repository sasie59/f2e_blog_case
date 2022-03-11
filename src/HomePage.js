import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/Component/Title/">檯頭</Link><br />
          </li>
          <li>
            <Link to="/Loading">Loading</Link><br />
          </li>
        </ul>
      </div>
    )
  }
}
