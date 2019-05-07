import React, { useState } from "react";
import Tableau from "./TableauView";
import TopBoardView from "./TopBoardView";
import "../styles/App.css";
import "../styles/Pile.css";
import tableau from "../models/tableau";
import game from "../models/Game";

const AppView = function() {
  const [pilebases, setPilebases] = useState(tableau.getPiles());
  const [topCard, setTopCard] = useState(null);
  const [foundations, setFoundations] = useState(game.getFoundations());

  const dragDrop = function(targetPileId, foundationId, event) {
    const cardId = event.dataTransfer.getData("id");

    if (targetPileId !== null) tableau.moveCard(+cardId, targetPileId);

    if (foundationId !== null) {
      const removedCard = tableau.removeCard(+cardId);
      //add remove card to foundations list according to the foundation id
      const newFoundations = game.addToFoundation(foundationId, removedCard);
      setTopCard(removedCard);
      setFoundations(newFoundations);
    }

    setPilebases(tableau.getPiles());
  };

  const topBoardProps = { dragDrop, topCard, foundations };

  return (
    <main data-test="component-app">
      <TopBoardView {...topBoardProps} />
      <Tableau dragDrop={dragDrop} pilebases={pilebases} />
    </main>
  );
};

export default AppView;
