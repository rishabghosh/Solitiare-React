import React from "react";
import PileBaseView from "./PileBaseView";
import Tableau from "../models/tableau";
import deck from "../models/deck";

const TableauView = function() {
  const tableau = new Tableau(deck.getWastePile());
  const pilebases = tableau.getPiles();

  const pileBaseView = pilebases.map((pile, index) => {
    const pileBaseProps = {
      "data-test": "component-pile-base",
      count: index + 1,
      pile
    };
    return <PileBaseView {...pileBaseProps} />;
  });

  return (
    <div data-test="component-tableau" className="bottom-container">
      {pileBaseView}
    </div>
  );
};

export default TableauView;
