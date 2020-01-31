import React from "react";
import ReactDOM from "react-dom";
import Editor from "./editor";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Editor />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
