import React from "react";

const Padded = ({ pad, children }) => {
  let padding = "auto";
  if (pad && pad.length > 0) {
    padding = pad
      .split(" ")
      .map(d => d + "px")
      .join(" ");
  }

  return <div style={{ padding }}>{children && children}</div>;
};

export default Padded;
