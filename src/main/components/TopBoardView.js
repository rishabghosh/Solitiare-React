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

    console.log("dragging start in stack");
  };

  const dragOver = event => {
    event.preventDefault();
    console.log("dragging over on stack");
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

const OpenStackView = function(props) {
  return (
    <div className="open-stack">
      <CardView {...props.topCard} isTopCard={true} />
    </div>
  );
};

/**
 * when dropped on a foundation
 * the card should get transfered
 * calls props.dragDrop with its count or id and event
 *
 */

const FoundationView = function(props) {
  const topCard = props.cards[props.cards.length - 1];

  const handleDrop = function(event) {
    props.dragDrop(null, props.count, event);
  };

  const style = {
    background: "white"
  };

  const dragOver = function(event) {
    event.preventDefault();
  };

  if (topCard) {
    return (
      <div
        className="foundation"
        onDrop={handleDrop}
        style={style}
        onDragOver={dragOver}
      >
        <OpenStackView topCard={topCard} />
      </div>
    );
  }

  return (
    <div
      className="foundation"
      onDrop={handleDrop}
      style={style}
      onDragOver={dragOver}
    >
      <BaseView />
    </div>
  );
};

/**
 * each foundation will get a count
 * starting from 0 to 3
 */
const createFoundationsView = function(dragDrop, foundations, stackCardId) {
  const foundationComponents = [];

  for (let count = 1; count <= foundations.length; count++) {
    const cards = foundations[count - 1].cards;
    const foundationProps = { count, dragDrop, cards, stackCardId };
    foundationComponents.push(<FoundationView {...foundationProps} />);
  }
  return foundationComponents;
};

const TopBoardView = function(props) {
  return (
    <div data-test="component-top-board" className="top-container">
      <div data-test="display-left" className="top-left-container">
        <StackView {...props} />
      </div>
      <div data-test="display-right" className="top-right-container">
        {createFoundationsView(
          props.dragDrop,
          props.foundations,
          props.stackCardId
        )}
      </div>
    </div>
  );
};

export default TopBoardView;
