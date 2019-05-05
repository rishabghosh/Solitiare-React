import React, { useState } from "react";
import deck from "../models/deck";
import CardView from "./CardView";
import "../styles/Card.css";
import "../styles/Pile.css";

const StackView = function() {
  const stackView = deck.getStack();

  const [stackIndex, setStackIndex] = useState(0);
  const [viewStackCard, setViewStackCard] = useState(stackView[stackIndex]);
  const [visibility, setVisibility] = useState(false);

  const handleCardChange = function() {
    if (!stackView[stackIndex]) {
      setVisibility(false);
      setStackIndex(0);
      return;
    }
    setVisibility(true);
    setViewStackCard(stackView[stackIndex]);
    setStackIndex(stackIndex + 1);
  };

  const cardProps = {
    unicode: viewStackCard.unicode,
    overlap: false,
    isTopCard: true
  };

  const style = { display: visibility ? "block" : "none" };

  return (
    <div className="stack">
      <div onClick={handleCardChange}>
        <CardView />
      </div>

      <div style={style}>
        <CardView {...cardProps} />
      </div>
    </div>
  );
};

const FoundationView = function() {
  return <div className="base" />;
};

const TopBoardView = function() {
  return (
    <div data-test="component-top-board" className="top-container">
      <div data-test="display-left" className="top-left-container">
        <StackView />
      </div>
      <div data-test="display-right" className="top-right-container">
        <FoundationView />
        <FoundationView />
        <FoundationView />
        <FoundationView />
      </div>
    </div>
  );
};

export default TopBoardView;
