import React, { Component } from "react";
import { render } from "react-dom";
import "./style.scss";
import Section from "./components/section";
import Header from "./sections/header";
import HeaderParagraph from "./components/header-paragraph";
import Card from "./components/card";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { assetURL } from "./helpers";
interface AppProps {}
interface AppState {}

//https://raw.githubusercontent.com/MorenoJoshua/abbc.mx/master/assets/ABBCWhite-1.png
class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Navbar />
        <Section id="header" className="bg-danger" center wide height="300px">
          <Header />
          <img src={assetURL("ABBCWhite-1.png")} />
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
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
