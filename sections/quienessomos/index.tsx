import React from "react";
import HeaderParagraph from "../../components/header-paragraph";
import Section from "../../components/section";
import Card from "../../components/card";
import { assetUrl } from "../../helpers";

const QuienesSomos = () => (
  <Section id="quienesSomos" className="d-flex flex-column" center>
    <HeaderParagraph
      header="Quienes somos?"
      text={`Como asociación nuestro objetivo es crear una comunidad de baristas unida, con la idea de aprender sobre cada uno de ellos, sus habilidades y motivantes, de esta manera lograr establecer lazos de unión entre cafeterías. `}
    />
    <div className="row w-100">
      <div className="col-4">
        <Card gradient bg={assetUrl("Image 8.png")}>
          <div
            className="w-100 text-white d-flex justify-content-start align-items-end p-1 px-2"
            style={{ height: "270px" }}
          >
            El Equipo
          </div>
        </Card>
      </div>

      <div className="col-4">
        <Card gradient bg={assetUrl("Image 8.png")}>
          <div
            className="w-100 text-white d-flex justify-content-start align-items-end p-1 px-2"
            style={{ height: "270px" }}
          >
            Nuestro Blog
          </div>
        </Card>
      </div>

      <div className="col-4">
        <Card gradient bg={assetUrl("Image 8.png")}>
          <div
            className="w-100 text-white d-flex justify-content-start align-items-end p-1 px-2"
            style={{ height: "270px" }}
          >
            E
          </div>
        </Card>
      </div>
    </div>
  </Section>
);

export default QuienesSomos;
