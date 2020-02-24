import React from "react";
import "./style.scss";

const HeaderParagraph: React.StatelessComponent<{
  header?: string;
  text: string;
}> = ({ header, text }) => (
  <div className="d-flex flex-column text-coffee">
    <div className="text-header text-center c-c">{header || ""}</div>
    <div className="text-paragraph text-center c-c">{text || ""}</div>
  </div>
);

export default HeaderParagraph;
