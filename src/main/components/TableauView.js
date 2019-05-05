import React, { useState } from "react";
import PileBaseView from "./PileBaseView";
import tableau from "../models/tableau";

const AllPilesView = function(props) {
  const pileViews = [];

  for (let index = 0; index < props.pilebases.length; index++) {
    const pile = props.pilebases[index];

    const pileBaseProps = {
      "data-test": "component-pile-base",
      dragDrop: props.dragDrop,
      count: index + 1,
      pile
    };
    pileViews.push(<PileBaseView {...pileBaseProps} />);
  }

  return pileViews;
};

const TableauView = function() {
  const [pilebases, setPilebases] = useState(tableau.getPiles());

  const dragStart = event => {
    event.dataTransfer.setData("id", event.target.id);
    console.log(event.target.id);
  };

  const dragOver = function(event) {
    event.preventDefault();
  };

  const dragDrop = function(targetPileId, event) {
    const cardId = event.dataTransfer.getData("id");
    tableau.moveCard(+cardId, targetPileId);
    setPilebases(tableau.getPiles());
  };

  return (
    <div
      data-test="component-tableau"
      className="bottom-container"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <AllPilesView dragDrop={dragDrop} pilebases={pilebases} />
    </div>
  );
};

export default TableauView;
