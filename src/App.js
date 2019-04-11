import React, { Component } from "react";
import "./App.css";
import "./Pile.css";
import Deck from "./model/deck";

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
    <main>
      <div className="top-container">
        <div className="top-left-container"></div>
        <div className="top-right-container"></div>
      </div>
      <div className="bottom-container">{getPileBases(<PileBase />)}</div>
    </main>
  );
};

export default App;
