import React, { useState } from "react";
import TableauView from "./TableauView";
import TopBoardView from "./TopBoardView";
import "../styles/App.css";
import "../styles/Pile.css";
import tableau from "../models/tableau";
import game from "../models/Game";

//here i need game.stack in a state
//if stack card id is provided remove that card from the stack
//and in foundation id it should get added

const AppView = function() {
  const [pilebases, setPilebases] = useState(tableau.getPiles());
  const [foundations, setFoundations] = useState(game.getFoundations());
  const [stack, setStack] = useState(game.getStack());

  const dragDrop = function(targetPileId, foundationId, event) {
    const cardId = event.dataTransfer.getData("id");
    const identification = event.dataTransfer.getData("text");

    if (targetPileId) {
      console.log("about to call tableau.mmc");
      tableau.moveMultipleCards(+cardId, targetPileId);

      // tableau.moveCard(+cardId, targetPileId);
    }

    if (foundationId) {
      let removedCard;

      if (identification === "stack") {
        removedCard = game.removeCardFromStack(+cardId);
      }

      if (identification === "tableau") {
        removedCard = tableau.removeCard(+cardId);
      }

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
