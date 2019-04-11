import React from "react";
import "../styles/Pile.css";

const Base = function() {
  return <div className="base" />;
};

const Pile = function(props) {
  return <div className="pile" />;
};

const PileBase = function() {
  return (
    <div className="pile-base">
      <Base />
      <Pile />
    </div>
  );
};

export default PileBase;
