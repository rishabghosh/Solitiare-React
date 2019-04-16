import React from "react";
import "../styles/Card.css";

const CARD_BACK_UNICODE = "\u{1F0A0}";


const Card = function(props) {
  let className = "card-main";
  let unicode = CARD_BACK_UNICODE;

  if (props.overlap) {
    className += " overlapping";
  }
  
  if(props.isTopCard){
    unicode = props.unicode;
  }

  const style = { color: props.color };

  return (
    <div className={className}>
      <div className="card-body" style={style}>
        {unicode}
      </div>
    </div>
  );
};

export default Card;
