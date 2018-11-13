import React, { Component } from "react";
import "../styles/videocard.scss";

class VideoCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="videoCard">
        <h3>
          <a className="videoLink" href="#">
            {this.props.title}
          </a>
        </h3>
        <iframe
          allowFullScreen="true"
          width="350"
          height="250"
          src={`https://www.youtube.com/embed/${this.props.id}`}
        />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default VideoCard;
