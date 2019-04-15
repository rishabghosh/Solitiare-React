import React from "react";
import "../styles/Card.css";

const Card = function(props) {
  console.log(props.color);
  return (
    <div className="card-main">
      <div className="card-body" style={{ color: props.color }}>
        {props.unicode}
      </div>
    </div>
  );
};

export default Card;
