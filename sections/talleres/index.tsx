import React from "react";
import HeaderParagraph from "../../components/header-paragraph";
import Section from "../../components/section";
import Card from "../../components/card";
const Talleres = () => (
  <Section id="talleres" className="flex-column" center>
    <HeaderParagraph header="Talleres" />
    <div className="row w-100">
      <div className="col-4">
        <Card gradient>Img</Card>
      </div>
      <div className="col-4">
        <Card gradient>Img</Card>
      </div>
      <div className="col-4">
        <Card gradient>Img</Card>
      </div>
    </div>
  </Section>
);

export default Talleres;
