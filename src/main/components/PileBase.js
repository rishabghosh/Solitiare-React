import React from "react";
import Card from "./Card";
import "../styles/Pile.css";
import deck from "../models/deck";
import _ from "lodash";

const wastePile = _.shuffle(deck.getCards()).slice(0, 28);

let index = 0;

const getCards = function(cardCount) {
  const cards = [];
  for (let count = 1; count <= cardCount; count++) {
    cards.push(<Card {...wastePile[index]} />);
    index++;
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
