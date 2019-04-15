import React from "react";
import PileBase from "./PileBase";

//should be in rules.js?
const PILEBASE_COUNT = 7;

const getPileBases = function() {
  const pileBases = [];
  for (let count = 1; count <= PILEBASE_COUNT; count++) {
    pileBases.push(
      <PileBase data-test="component-pile-base" count={count} key={count} />
    );
  }
  return pileBases;
};

const Tableau = function() {
  return (
    <div data-test="component-tableau" className="bottom-container">
      {getPileBases()}
    </div>
  );
};

export default Tableau;
