import React from "react";
import PileBase from "./PileBase";

const getPileBases = function() {
  const pileBases = [];
  for (let count = 0; count < 7; count++) {
    pileBases.push(<PileBase key={count} />);
  }
  return pileBases;
};

const Tableau = function() {
  return (
    <div data-test="component-tableau" className="bottom-container">
      {getPileBases(<PileBase />)}
    </div>
  );
};

export default Tableau;
