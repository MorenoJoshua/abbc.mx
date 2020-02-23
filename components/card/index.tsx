import React from "react";
import "./style.scss";

const Card = ({ gradient, bg, children }) => (
  <div className="card layers-container">
    <div
      className="layers-layer c-c display-2 text-primary"
      style={{
        height: "100%",
        ...(bg && {
          backgroundImage: `url('${bg}')`,
          backgroundPosition: "center center",
          backgroundSize: "cover"
        })
      }}
    />
    {gradient && <div className="layers-layer bg-gradient-mono-reverse h-100 w-100" />}
    <div className="layers-layer">{children}</div>
  </div>
);

export default Card;
