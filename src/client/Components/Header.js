import React, { Component } from "react";
import "../styles/header.scss";

class Header extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="header">
        <div>
          <img
            height="150px"
            className="reactVideoHeaderImage"
            src="src/client/img/reactVideo.png"
            alt="reactVideo"
          />
        </div>
        <div>
          <h1>
            <em className="r">R</em>
            eact <em className="v">V</em>
            ideo
          </h1>
        </div>
        <div>
          <button className="loginButton">login</button>
        </div>
      </div>
    );
  }
}

export default Header;
