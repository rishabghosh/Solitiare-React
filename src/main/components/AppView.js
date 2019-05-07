import React, { useState } from "react";
import TableauView from "./TableauView";
import TopBoardView from "./TopBoardView";
import "../styles/App.css";
import "../styles/Pile.css";
import tableau from "../models/tableau";
import game from "../models/Game";

const AppView = function() {
  const [pilebases, setPilebases] = useState(tableau.getPiles());
  const [foundations, setFoundations] = useState(game.getFoundations());

  const dragDrop = function(targetPileId, foundationId, event) {
    console.log("target pile id is ", targetPileId);
    const cardId = event.dataTransfer.getData("id");

    if (targetPileId) tableau.moveCard(+cardId, targetPileId);

    if (foundationId) {
      const removedCard = tableau.removeCard(+cardId);
      const newFoundations = game.addToFoundation(foundationId, removedCard);
      setFoundations(newFoundations);
    }

    setPilebases(tableau.getPiles());
  };

  const topBoardViewProps = { dragDrop, foundations };
  const tableauViewProps = { dragDrop, pilebases };

  return (
    <main data-test="component-app">
      <TopBoardView {...topBoardViewProps} />
      <TableauView {...tableauViewProps} />
    </main>
  );
};

export default AppView;
