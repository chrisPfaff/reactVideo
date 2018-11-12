// import React, { Component } from "react";
// import "./styles/app.scss";

import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header";
import Container from "./Container";

import "../styles/index.scss";

const youtubeHttp = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=javascript&type=video&videoDefinition=high&key=${
  process.env.API_KEY
}`;

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      dataLogged: false
    };
  }

  fetchData() {
    fetch(youtubeHttp)
      .then(data => {
        return data.json();
      })
      .then(resp => {
        this.setState({ data: resp.items, dataLogged: true });
      });
  }

  componentWillMount() {
    this.fetchData();
  }

  renderField() {
    if (this.state.dataLogged === true) {
      return <Container data={this.state.data} />;
    } else {
      return <div>Loading</div>;
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderField()}
      </div>
    );
  }
}

export default App;

render(<App />, document.getElementById("root"));

// async componentDidMount() {
//   await fetch("/api/pooper")
//     .then(res => res.json())
//     .then(user => this.setState({ username: user.username }));
// }
