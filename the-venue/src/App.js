import React, { Component } from "react";
import "./resources/styles.css";

// components
import Header from "./components/header_footer/Header";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1550px", background: "darkgreen" }}
      >
        <Header />
      </div>
    );
  }
}

export default App;
