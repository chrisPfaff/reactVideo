import React, { Component } from "react";
import "../styles/header.scss";

class Header extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="header">
        <h1>
          <em className="r">R</em>
          eact <em className="v">V</em>
          ideo
        </h1>
      </div>
    );
  }
}

export default Header;
