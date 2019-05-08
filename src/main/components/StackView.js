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

  const cardProps = { ...currentStackCard, overlap: false, isTopCard: true };
  const style = { display: visibility ? "block" : "none" };

  const dragStart = event => {
    event.dataTransfer.setData("id", event.target.id);
    event.dataTransfer.setData("text", "stack");
  };

  const dragOver = event => {
    event.preventDefault();
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

export default StackView;
