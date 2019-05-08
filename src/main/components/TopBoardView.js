import React from "react";
import FoundationView from "./FoundationView";
import StackView from "./StackView";
import "../styles/Card.css";
import "../styles/Pile.css";

const showAllFoundations = function(dragDrop, foundations) {
  return foundations.map((foundation, index) => {
    const cards = foundation.cards;
    const foundationProps = { count: index + 1, dragDrop, cards };
    return <FoundationView {...foundationProps} />;
  });
};

/**
 * Component [TopBoardView]
 * @param {*} props :- should contain [dragDrop], [foundations], [stack]
 */

const TopBoardView = function({ dragDrop, foundations, stack }) {
  return (
    <div data-test="component-top-board" className="top-container">
      <div data-test="display-left" className="top-left-container">
        <StackView stack={stack} />
      </div>
      <div data-test="display-right" className="top-right-container">
        {showAllFoundations(dragDrop, foundations)}
      </div>
    </div>
  );
};

export default TopBoardView;
