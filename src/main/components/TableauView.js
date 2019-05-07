import React, { useState } from "react";
import PileBaseView from "./PileBaseView";

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

const TableauView = function(props) {

  const dragStart = event => {
    event.dataTransfer.setData("id", event.target.id);
  };

  const dragOver = function(event) {
    event.preventDefault();
  };



  return (
    <div
      data-test="component-tableau"
      className="bottom-container"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <AllPilesView dragDrop={props.dragDrop} pilebases={props.pilebases} />
    </div>
  );
};

export default TableauView;
