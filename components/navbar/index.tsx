import React from "react";
import "./style.scss";
import { assetUrl } from "../../helpers";
// TODO: Animacion
type NavbarProps = {};
class Navbar extends React.Component<NavbarProps> {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div>
            <img className="navbar-image" src={assetUrl("ABBCWhite-1.png")} />
          </div>
          <div className="d-flex align-items-start" style={{h}}>
            <span className="navbar-button">Conocenos</span>
            <span className="navbar-button">Blog</span>
            <span className="navbar-button">Talleres</span>
            <span className="navbar-button">Eventos</span>
            <span className="navbar-button">Barista Battle</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
