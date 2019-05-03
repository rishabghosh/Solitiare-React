import React from "react";
import "../styles/Card.css";
import Card from "./Card";

const Stack = function() {
  return (
    <div>
      <Card />
    </div>
  );
};

const TopBoard = function() {
  return (
    <div data-test="component-top-board" className="top-container">
      <div data-test="display-left" className="top-left-container">
        <Stack />
      </div>
      <div data-test="display-right" className="top-right-container" />
    </div>
  );
};

export default TopBoard;
