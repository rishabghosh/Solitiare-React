import React from "react";
import Tableau from "./TableauView";
import TopBoardView from "./TopBoardView";
import "../styles/App.css";
import "../styles/Pile.css";

const AppView = function() {
  return (
    <main data-test="component-app">
      <TopBoardView />
      <Tableau />
    </main>
  );
};

export default AppView;
