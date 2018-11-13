import React, { Component } from "react";
import VideoCard from "./VideoCard";

import "../styles/container.scss";

//import search component
//import youtube api

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const VideoArray = this.props.data.map(items => {
      return (
        <VideoCard
          id={items.id.videoId}
          video={items.snippet.thumbnails.medium.url}
          description={items.snippet.description}
          title={items.snippet.title}
        />
      );
    });
    return <div className="mainContainer">{VideoArray}</div>;
  }
}

export default Container;
