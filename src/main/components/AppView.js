import React, { useState } from "react";
import TableauView from "./TableauView";
import TopBoardView from "./TopBoardView";
import "../styles/App.css";
import "../styles/Pile.css";
import tableau from "../models/tableau";
import game from "../models/Game";

const toNumber = convertable => +convertable;
const getEventData = (event, data) => event.dataTransfer.getData(data);

const getRemovedCards = function(identification, cardId) {
  if (identification === "stack") return game.removeCardFromStack(cardId);
  if (identification === "tableau") return tableau.removeCard(cardId);
};

const AppView = function() {
  const [pilebases, setPilebases] = useState(tableau.getPiles());
  const [foundations, setFoundations] = useState(game.getFoundations());
  const [stack, setStack] = useState(game.getStack());

  const dragDrop = function(targetPileId, foundationId, event) {
    const cardId = toNumber(getEventData(event, "id"));
    const identification = getEventData(event, "text");

    if (targetPileId) tableau.moveMultipleCards(cardId, targetPileId);

    if (foundationId) {
      const removedCard = getRemovedCards(identification, cardId);
      const newFoundations = game.addToFoundation(foundationId, removedCard);
      setFoundations(newFoundations);
    }

    setStack(game.getStack());
    setPilebases(tableau.getPiles());
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
