import React, { Component } from "react";
import { render } from "react-dom";
import "./style.scss";
import Section from "./components/section";
import Header from './sections/header';

interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Section id="header" className="bg-danger" center wide height="300px">
          <Header/>
        </Section>
        <Section id="quienesSomos" className="" center>
          Quienes somos
        </Section>
        <Section id="baristaBattleJumbotron" className="bg-danger" wide>
          <div className="container text-right">Barista Battle</div>
        </Section>
        <Section id="talleres" className="" center>
          Talleres
        </Section>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
