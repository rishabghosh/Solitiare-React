import React, { useState } from "react";
import CardView from "./CardView";
import "../styles/Card.css";
import "../styles/Pile.css";

const StackView = function({ stack }) {
  const [stackIndex, setStackIndex] = useState(0);
  const [currentStackCard, setCurrentStackCard] = useState(stack[stackIndex]);
  const [visibility, setVisibility] = useState(false);

  const handleCardChange = function() {
    if (!stack[stackIndex]) {
      setVisibility(false);
      setStackIndex(0);
      return;
    }
    setVisibility(true);
    setCurrentStackCard(stack[stackIndex]);
    setStackIndex(stackIndex + 1);
  };

  const cardProps = {
    ...currentStackCard,
    overlap: false,
    isTopCard: true
  };

  const style = { display: visibility ? "block" : "none" };

  const dragStart = event => {
    event.dataTransfer.setData("id", event.target.id);
    event.dataTransfer.setData("text", "stack");
  };

  const dragOver = event => {
    event.preventDefault();
  };

  return (
    <div className="stack">
      <div onClick={handleCardChange}>
        <CardView draggable={"false"} />
      </div>

      <div style={style} onDragStart={dragStart} onDragOver={dragOver}>
        <CardView {...cardProps} />
      </div>
    </div>
  );
};

const BaseView = function() {
  return <div className="base" />;
};

const OpenStackView = function({ topCard }) {
  return (
    <div className="open-stack">
      <CardView {...topCard} isTopCard={true} />
    </div>
  );
};

/**
 * when dropped on a foundation
 * the card should get transfered
 * calls props.dragDrop with its count or id and event
 *
 */

const FoundationView = function({ cards, dragDrop, count }) {
  const topCard = cards[cards.length - 1];

  const handleDrop = function(event) {
    dragDrop(null, count, event);
  };

  const dragOver = function(event) {
    event.preventDefault();
  };

  const chooseView = function({ topCard }) {
    if (topCard) return <OpenStackView topCard={topCard} />;
    return <BaseView />;
  };

  return (
    <div className="foundation" onDrop={handleDrop} onDragOver={dragOver}>
      {chooseView({ topCard })}
    </div>
  );
};

const createFoundationsView = function(dragDrop, foundations) {
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
        {createFoundationsView(dragDrop, foundations)}
      </div>
    </div>
  );
};

export default TopBoardView;
