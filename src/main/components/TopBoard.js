import React, { useState } from "react";
import "../styles/Card.css";
import deck from "../models/deck";
import Card from "./Card";

const Stack = function() {
  const stackView = deck.getStack();
  console.log(stackView);

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

  const style = {
    display: visibility ? "block" : "none"
  };

  return (
    <div className="stack">
      <div onClick={handleCardChange}>
        <Card />
      </div>

      <div style={style}>
        <Card {...cardProps} />
      </div>
    </div>
  );
};

const TopBoard = function() {
  return (
    <div data-test="component-top-board" className="top-container">
      <div data-test="display-left" className="top-left-container">
        <Stack />
      </div>
      <div data-test="display-right" className="top-right-container" />
    </div>
  );
};

export default TopBoard;
