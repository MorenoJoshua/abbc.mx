import React from "react";
import './style.scss';

const Card = ({ gradient, bg, children }) => (
  <div className="card layers-container">
    <div className="layers-layer c-c display-2 text-primary">BG</div>
    {gradient && <div className="layers-layer bg-gradient-mono" />}
    <div className="layers-layer">{children}</div>
  </div>
);

export default Card;
