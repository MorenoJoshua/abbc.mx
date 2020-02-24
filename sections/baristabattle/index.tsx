import React from "react";
import Section from "../../components/section";
import { assetUrl } from "../../helpers";
const BaristaBattle = () => (
  <Section id="baristaBattleJumbotron" className="" gradient wide>
    <div className="layers-container bg-danger" style={{ height: "400px" }}>
      <div
        className="layers-layer"
        style={{
          backgroundPosition: 'center center',
          backgroundSize: "cover",
          backgroundImage: `url('${assetUrl("Image -52.png")}')`
        }}
      >
        <div className="container h-100 d-flex justify-content-end align-items-center">
          <div className="t d-flex flex-column text-sm align-items-end">
            <img
              style={{ width: "180px" }}
              src={assetUrl("BaristaBattleWhite.png")}
            />
            <span className="text-sm text-white text-right mt-3">
              Una comunidad de baristas
              <br />
              en Baja California y San Diego
            </span>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default BaristaBattle;
