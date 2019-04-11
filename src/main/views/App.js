import React, { Component } from "react";
import "../styles/App.css";
import "../styles/Pile.css";
import Deck from "../models/deck";
import PileBase from "./PileBase";
import Tableau from "./Tableau";

const App = function() {
  return (
    <main data-test="component-app">
      <div data-test="top-container-display" className="top-container">
        <div data-test="top-left-display" className="top-left-container" />
        <div data-test="top-right-display" className="top-right-container" />
      </div>
      <Tableau />
    </main>
  );
};

export default App;
