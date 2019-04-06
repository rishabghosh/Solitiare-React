import React, { Component } from "react";
import "./App.css";
import Deck from "./model/deck"

const App = function() {
  return <div>{Deck.create().getCards()}</div>;
};

export default App;
