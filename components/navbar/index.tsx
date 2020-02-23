import React from "react";
import "./style.scss";

// TODO: Animacion
type NavbarProps = {};
class Navbar extends React.Component<NavbarProps> {
  render() {
    return (
      <div className="navbar bg-coffee">
        <div className="container">
          <div>Logo</div>
          <div>
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
