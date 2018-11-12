import React, { Component } from "react";
import "../styles/searchcomponent.scss";

class SearchComponent extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="searchBar">
        <form action="">
          <label htmlFor="searchBar">Search For A Video</label>
          <input id="searchBar" type="text" />
          <input id="submitButton" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchComponent;
