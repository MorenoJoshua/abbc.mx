import React, { Component } from "react";
import { render } from "react-dom";
import "./style.scss";
import Section from "./components/section";
import Bienvenido from "./sections/bienvenido";
import QuienesSomos from "./sections/quienessomos";
import BaristaBattle from "./sections/baristabattle";
import Talleres from "./sections/talleres";
import HeaderParagraph from "./components/header-paragraph";
import Card from "./components/card";
import Navbar from "./components/navbar";
import Padded from "./components/padded";
import Footer from "./sections/footer";
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
        <Padded pad="180 0 180 0">
          <BaristaBattle />
        </Padded>
        {/*<Talleres/>*/}
        {<Footer />}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
