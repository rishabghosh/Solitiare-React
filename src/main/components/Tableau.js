import React from "react";
import PileBase from "./PileBase";
import deck from "../models/deck";
import _ from "lodash";

//should be in rules.js?
const PILEBASE_COUNT = 7;

const getPileBases = function() {
  // its taking the shuffling the deck and taking the first 28 cards
  const wastePile = _.shuffle(deck.getCards()).slice(0, 28);

  // the index is tracked to get element out of wastePile array
  let indexOfWastePile = 0;

  const pileBases = [];
  for (let count = 1; count <= PILEBASE_COUNT; count++) {
    const pileBaseProps = {
      "data-test": "component-pile-base",
      key: count,
      wastePile,
      indexOfWastePile,
      count
    };

    pileBases.push(<PileBase {...pileBaseProps} />);
  }
  return pileBases;
};

const Tableau = function() {
  const drop = function(event) {
    event.preventDefault();
    let draggedCardId = event.dataTransfer.getData("id");
    console.log("drop", event.target.id);
    // if (isCardPlayable(draggedCardId, targetPileNum))
    //   updatePiles(draggedCardId, targetPileNum);
  };

  return (
    <div data-test="component-tableau" className="bottom-container">
      {getPileBases()}
    </div>
  );
};

export default Tableau;
