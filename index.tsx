import React, { Component } from "react";
import { render } from "react-dom";
import "./style.scss";
import Section from "./components/section";
import Bienvenido from "./sections/bienvenido";
import QuienesSomos from "./sections/quienessomos";
import BaristaBattle from "./sections/baristabattle";
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
        <QuienesSomos />
        <BaristaBattle/>
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
