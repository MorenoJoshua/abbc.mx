import React, { Component } from "react";
import { render } from "react-dom";
import "./style.scss";
import Section from "./components/section";
import Bienvenido from "./sections/bienvenido";
import HeaderParagraph from "./components/header-paragraph";
import Card from "./components/card";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { assetUrl } from "./helpers";
interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div className="main">
        <Navbar />
        <Bienvenido />
        <Section id="quienesSomos" className="d-flex flex-column" center>
          <HeaderParagraph
            header="Quienes somos?"
            text={`Como asociación nuestro objetivo es crear una comunidad de baristas unida, con la idea de aprender sobre cada uno de ellos, sus habilidades y motivantes, de esta manera lograr establecer lazos de unión entre cafeterías. `}
          />
          <div className="row w-100">
            <div className="col-4">
              <Card gradient bg={assetUrl("Image 8.png")}>
                <div
                  className="w-100 text-white d-flex justify-content-start align-items-end p-1 px-2"
                  style={{ height: "270px" }}
                >
                  El Equipo
                </div>
              </Card>
            </div>

            <div className="col-4">
              <Card gradient bg={assetUrl("Image 8.png")}>
                <div
                  className="w-100 text-white d-flex justify-content-start align-items-end p-1 px-2"
                  style={{ height: "270px" }}
                >
                  Nuestro Blog
                </div>
              </Card>
            </div>

            <div className="col-4">
              <Card gradient bg={assetUrl("Image 8.png")}>
                <div
                  className="w-100 text-white d-flex justify-content-start align-items-end p-1 px-2"
                  style={{ height: "270px" }}
                >
                  E
                </div>
              </Card>
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
        {/*<Footer /> */}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
