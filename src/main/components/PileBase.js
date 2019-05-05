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
let indexOfWastePile = 0;

const getCards = function({ wastePile, cardCount }) {
  const cards = [];
  for (let count = 1; count <= cardCount; count++) {
    const overlap = !(count === 1);
    const isTopCard = count === cardCount;

    const cardProps = {
      ...wastePile[indexOfWastePile],
      overlap,
      isTopCard
    };

    cards.push(<Card {...cardProps} />);
    indexOfWastePile++;
    console.log("index of waste pile is ", indexOfWastePile)
  }
  return cards;
};

const Base = function() {
  return <div className="base" />;
};

const Pile = function(props) {
  const getCardsProps = {
    wastePile: props.wastePile,
    indexOfWastePile: props.indexOfWastePile,
    cardCount: props.count
  };
  const [cards, setCards] = useState(getCards(getCardsProps));

  return <div className="pile">{cards}</div>;
};

const PileBase = function(props) {
  const id = "Pile" + props.count;
  return (
    <div className="pile-base" id={id}>
      <Base />
      <Pile {...props} />
    </div>
  );
};

export default PileBase;
