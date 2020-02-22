import React, { Component } from "react";
import { render } from "react-dom";
import "./style.scss";
import Section from "./components/section";

interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Section id="header" className="bg-danger" center>
          header
        </Section>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
