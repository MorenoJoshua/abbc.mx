import React, { Component } from "react";
import { render } from "react-dom";
import "./style.scss";
import Section from "./components/section";
import Header from "./sections/header";
import HeaderParagraph from "./components/header-paragraph";
import Card from "./components/card";

interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Section id="header" className="bg-danger" center wide height="300px">
          <Header />
        </Section>
        <Section id="quienesSomos" className="d-flex flex-column" center>
          <HeaderParagraph
            header="Quienes somos?"
            text={`Como asociación nuestro objetivo es crear una comunidad de baristas unida, con la idea de aprender sobre cada uno de ellos, sus habilidades y motivantes, de esta manera lograr establecer lazos de unión entre cafeterías. `}
          />
          <div className="row w-100">
            <div className="col-4">
              <Card gradient>El Equipo</Card>
            </div>
            <div className="col-4">
              <Card gradient>Nuestro Blog</Card>
            </div>
            <div className="col-4">
              <Card gradient>Eventos</Card>
            </div>
          </div>
        </Section>
        <Section id="baristaBattleJumbotron" className="bg-danger" wide>
          <div className="container text-right">Barista Battle</div>
        </Section>
        <Section id="talleres" className="flex-column" center>
          <HeaderParagraph header="Talleres" />
          <div className="row w-100">
            <div className="col-4">
              <Card gradient>Img</Card>
            </div>
            <div className="col-4">
              <Card gradient>Img</Card>
            </div>
            <div className="col-4">
              <Card gradient>Img</Card>
            </div>
          </div>
        </Section>
        <Section id="footer" className="bg-coffee text-white footer">
          Footer
        </Section>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
