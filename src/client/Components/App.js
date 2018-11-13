// import React, { Component } from "react";
// import "./styles/app.scss";

import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header";
import Container from "./Container";
//import fetchData from "../../utils/index";
import "../styles/searchcomponent.scss";
import "../styles/index.scss";

const youtubeHttp = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=reactjs&type=video&videoDefinition=high&key=${
  process.env.API_KEY
}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataLogged: false,
      query: ""
    };
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleClickSearch(e) {
    this.setState({ query: e.target.value });
  }

  handleSubmit(e) {
    console.log(this.state.query);
    e.preventDefault;
  }

  render() {
    return (
      <div>
        <Header />
        <div className="searchBar">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="searchBar">Search For A Video</label>
            <input
              id="searchBar"
              type="text"
              value={this.state.query}
              onChange={this.handleClickSearch}
            />
            <input id="submitButton" type="submit" value="Submit" />
          </form>
        </div>
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
