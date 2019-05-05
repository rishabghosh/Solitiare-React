import React, { useState } from "react";
import Card from "./Card";
import "../styles/Pile.css";

/**
 * it takes a card count and returns a array of Card component
 * if count is 1 the card is overlap = false
 * if card count and count matches its a topcard
 *
 */

const getCards = function({ wastePile, indexOfWastePile, cardCount }) {
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

  const dragDrop = function(event) {
    const cardPropsData = JSON.parse(event.dataTransfer.getData("card-props"));
    const newCards = [...cards];
    newCards.push(<Card {...cardPropsData} overlap={true} />);
    setCards(newCards);
  };

  return (
    <div className="pile" onDrop={dragDrop}>
      {cards}
    </div>
  );
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
