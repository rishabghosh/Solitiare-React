import React from "react";
import PileBase from "./PileBase";
import tableau from "../models/tableau";

const Tableau = function() {
  const pilebases = tableau.getPiles();

  const pileBaseView = pilebases.map((pile, index) => {

    const pileBaseProps = {
      "data-test": "component-pile-base",
      key: index + 1,
      wastePile: tableau.getWastePile(),
      count: index + 1
    };

    return <PileBase {...pileBaseProps} />;
  });

  return (
    <div data-test="component-tableau" className="bottom-container">
      {pileBaseView}
    </div>
  );
};

export default Tableau;
