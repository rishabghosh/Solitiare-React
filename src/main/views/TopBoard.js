import React from "react";

const TopBoard = function() {
  return (
    <div data-test="component-top-board" className="top-container">
      <div data-test="display-left" className="top-left-container" />
      <div data-test="display-right" className="top-right-container" />
    </div>
  );
};

export default TopBoard;
