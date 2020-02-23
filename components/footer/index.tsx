import React from "react";
import "./style.scss";

// TODO: Animacion
type NavbarProps = {};
class Footer extends React.Component<NavbarProps> {
  render() {
    return (
      <div className="footer bg-coffee">
        <div className="container s-between">
          <div>Logo</div>
          <div className="d-flex flex-column text-right">
            <span>Contactanos en:</span>
            <span>contacto@abbc.mx</span>
            <span>664- 552- 6162</span>
            <span>(F) (I)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
