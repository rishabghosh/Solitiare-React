import React from "react";
import Tableau from "./Tableau";
import TopBoard from "./TopBoard";
import "../styles/App.css";
import "../styles/Pile.css";

const App = function() {
  console.log("i dont kow");
  return (
    <main data-test="component-app">
      {console.log("app is rendering")}
      <TopBoard />
      <Tableau />
    </main>
  );
};

export default App;
