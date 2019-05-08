import React, { useState } from "react";
import TableauView from "./TableauView";
import TopBoardView from "./TopBoardView";
import "../styles/App.css";
import "../styles/Pile.css";
import game from "../models/Game";

const toNumber = convertable => +convertable;
const getEventData = (event, data) => event.dataTransfer.getData(data);

const getRemovedCards = function(identification, cardId) {
  if (identification === "stack") return game.removeCardFromStack(cardId);
  if (identification === "tableau") return game.removeCardFromTableau(cardId);
};

const AppView = function() {
  const [pilebases, setPilebases] = useState(game.getPiles());
  const [foundations, setFoundations] = useState(game.getFoundations());
  const [stack, setStack] = useState(game.getStack());

  const dragDrop = function(targetPileId, foundationId, event) {
    const cardId = toNumber(getEventData(event, "id"));
    const identification = getEventData(event, "text");

    if (targetPileId) game.moveCardsInTableau(cardId, targetPileId);

    if (foundationId) {
      const removedCard = getRemovedCards(identification, cardId);
      const newFoundations = game.addToFoundation(foundationId, removedCard);
      setFoundations(newFoundations);
    }

    setStack(game.getStack());
    setPilebases(game.getPiles());
  };

  const topBoardViewProps = { dragDrop, foundations, stack };
  const tableauViewProps = { dragDrop, pilebases };

  return (
    <main data-test="component-app">
      <TopBoardView {...topBoardViewProps} />
      <TableauView {...tableauViewProps} />
    </main>
  );
};

export default AppView;
