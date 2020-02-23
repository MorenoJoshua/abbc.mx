import React from "react";
import {assetUrl} from '../../helpers';

const Header = () => (
  <div className="layers-container">
    <div className="layers-layer c-c display-2 text-primary" style={{
      backgroundImage: `url('${assetUrl("IMG_-69.png")}')`,
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}/>
    <div className="layers-layer bg-gradient-mono" />
    <div className="layers-layer c-c text-heroHeader text-white">Bienvenido a ABBC</div>
  </div>
);

export default Header;
