import React from "react";
import "./style.scss";
import { assetUrl } from "../../helpers";
// TODO: Animacion
type NavbarProps = {};
class Navbar extends React.Component<NavbarProps> {
  state = {
    top: true
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      window.requestAnimationFrame(() => {
        if (this.state.top && window.pageYOffset > 0) {
          this.setState({ top: false });
        } else if (window.pageYOffset === 0 && !this.state.top) {
          this.setState({ top: true });
        }
      });
    });
  }
  render() {
    return (
      <div
        className={`navbar${
          this.state.top ? "bg-transparent" : "bg-coffee"
        }`}
      >
        <div className="container py-3">
          <div>
            <img className="navbar-image" style={{
              ...!this.state.top ? {width: "50px"} : {}
            }} src={assetUrl("ABBCWhite-1.png")} />
          </div>
          <div className="d-flex align-items-start">
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
