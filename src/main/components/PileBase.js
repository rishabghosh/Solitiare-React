import React, { useState } from "react";
import Card from "./Card";
import "../styles/Pile.css";
import tableau from "../models/tableau";

/**
 * it takes a card count and returns a array of Card component
 * if count is 1 the card is overlap = false
 * if card count and count matches its a topcard
 *
 */

const getCards = function(pile) {
  const cardCount = pile.length;
  const cards = [];

  for (let index = 0; index < cardCount; index++) {
    const overlap = !(index === 0);
    const isTopCard = index === cardCount;
    const cardInfo = pile[index];
    const cardProps = { ...cardInfo, overlap, isTopCard };
    cards.push(<Card {...cardProps} />);
  }
  return cards;
};

const Base = function() {
  return <div className="base" />;
};

const Pile = function(props) {
  return <div className="pile">{getCards(props.pile)}</div>;
};

const PileBase = function(props) {
  const id = "pile" + props.count;
  return (
    <div className="pile-base" id={id}>
      <Base />
      <Pile {...props} />
    </div>
  );
};

export default PileBase;
