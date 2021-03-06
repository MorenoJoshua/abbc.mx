import React from "react";
import { assetUrl } from "../../helpers";
import "./style.scss";

const iconstyle = {
  width: '32px',
  marginLeft: '10px'
}
// TODO: Animacion
type NavbarProps = {};
class Footer extends React.Component<NavbarProps> {
  render() {
    return (
      <div className="footer bg-coffee">
        <div className="container py-3 s-between">
          <div className="">
            <img style={{ width: "130px" }} src={assetUrl("ABBCWhite-1.png")} />
          </div>
          <div className="d-flex flex-column text-right">
            <span>Contactanos en:</span>
            <span>contacto@abbc.mx</span>
            <span>664- 552- 6162</span>
            <span>
              <span>
                <img style={iconstyle} src={assetUrl("f.png")} />
              </span>
              <span>
                <img style={iconstyle} src={assetUrl("ig.png")} />
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
