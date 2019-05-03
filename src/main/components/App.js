import React from "react";
import Tableau from "./Tableau";
import TopBoard from "./TopBoard";
import "../styles/App.css";
import "../styles/Pile.css";

const App = function() {
  return (
    <main data-test="component-app">
      <TopBoard />
      <Tableau />
    </main>
  );
};

export default App;
