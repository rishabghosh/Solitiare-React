import React from 'react';
import PileBase from "./PileBase";

const getPileBases = function(component) {
  const pileBases = [];
  for (let count = 0; count < 7; count++) {
    pileBases.push(component);
  }
  return pileBases;
};

const Tableau = function() {
  return (
    <div data-test="bottom-container-display" className="bottom-container">
      {getPileBases(<PileBase />)}
    </div>
  );
};

export default Tableau;
