import React from "react";
import CardView from "./CardView";
import "../styles/Card.css";
import "../styles/Pile.css";

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

const FoundationView = function({ cards, dragDrop, count }) {
  const topCard = cards[cards.length - 1]; //last card in the list

  const handleDrop = function(event) {
    dragDrop(null, count, event);
  };

  const dragOver = function(event) {
    event.preventDefault();
  };

  const chooseView = function(topCard) {
    if (topCard) return <OpenStackView topCard={topCard} />;
    return <BaseView />;
  };

  return (
    <div className="foundation" onDrop={handleDrop} onDragOver={dragOver}>
      {chooseView(topCard)}
    </div>
  );
};

export default FoundationView;
