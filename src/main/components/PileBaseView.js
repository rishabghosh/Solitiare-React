import React from "react";
import CardView from "./CardView";
import "../styles/Pile.css";

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
    cards.push(<CardView {...cardProps} />);
  }
  return cards;
};

const BaseView = function() {
  return <div className="base" />;
};

const PileView = function({ targetPileId, dragDrop, pile }) {
  const handleDrop = event => {
    dragDrop(targetPileId, null, event);
  };

  return (
    <div className="pile" onDrop={handleDrop}>
      {getCards(pile)}
    </div>
  );
};

const PileBaseView = function(props) {
  const id = "pile" + props.count;
  return (
    <div className="pile-base" id={id}>
      <BaseView />
      <PileView {...props} />
    </div>
  );
};

export default PileBaseView;
