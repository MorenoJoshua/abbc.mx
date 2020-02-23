import React, { Component } from "react";
import { render } from "react-dom";
import "./style.scss";
import Section from "./components/section";
import Header from "./sections/header";
import HeaderParagraph from "./components/header-paragraph";

interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Section id="header" className="bg-danger" center wide height="300px">
          <Header />
        </Section>
        <Section id="quienesSomos" className="" center>
          <HeaderParagraph
            header="Quienes somos"
            text={`Como asociación nuestro objetivo es crear una comunidad de baristas unida, con la idea de aprender sobre cada uno de ellos, sus habilidades y motivantes, de esta manera lograr establecer lazos de unión entre cafeterías. `}
          />
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
