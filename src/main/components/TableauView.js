import React from "react";
import PileBaseView from "./PileBaseView";

//[AllPilesView]  - rename pile to pilebase
//can AllPilesView be a js function rater that a component?

const AllPilesView = function(props) {
  const { dragDrop, pilebases } = props;

  return pilebases.map((pile, index) => {
    const pileBaseProps = { targetPileId: index + 1, dragDrop, pile };
    return <PileBaseView {...pileBaseProps} />;
  });
};

/**
 * Component [TableauView]
 * @param {*} props :- should contain state [pilebases] and function [dragDrop]
 */

const TableauView = function(props) {
  const dragStart = event => {
    event.dataTransfer.setData("id", event.target.id);
  };

  const dragOver = event => {
    event.preventDefault();
  };

  return (
    <div
      data-test="component-tableau"
      className="bottom-container"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <AllPilesView {...props} />
    </div>
  );
};

export default TableauView;
