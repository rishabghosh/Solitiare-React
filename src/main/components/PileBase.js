import React from "react";
import Card from "./Card";
import "../styles/Pile.css";

const getCards = function(cardCount) {
  const cards = [];
  for (let count = 1; count <= cardCount; count++) {
    cards.push(<Card />);
  }
  return cards;
};

const Base = function() {
  return <div className="base" />;
};

const Pile = function(props) {
  return <div className="pile">{getCards(props.count)}</div>;
};

const PileBase = function(props) {
  return (
    <div className="pile-base">
      <Base />
      <Pile {...props} />
    </div>
  );
};

export default PileBase;
