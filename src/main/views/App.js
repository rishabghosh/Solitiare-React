import React, { Component } from "react";
import "../styles/App.css";
import "../styles/Pile.css";
import Deck from "../models/deck";

const PileBase = function() {
  return <div className="PileBase" />;
};

const getPileBases = function(component) {
  const pileBases = [];
  for (let count = 0; count < 7; count++) {
    pileBases.push(component);
  }
  return pileBases;
};

const App = function() {
  return (
    <main data-test="component-app">
      <div data-test="top-container-display" className="top-container">
        <div data-test="top-left-display" className="top-left-container" />
        <div data-test="top-right-display" className="top-right-container" />
      </div>
      <div data-test="bottom-container-display" className="bottom-container">
        {getPileBases(<PileBase />)}
      </div>
    </main>
  );
};

export default App;
