import React from "react";
import "../styles/Card.css";

const CARD_BACK_UNICODE = "\u{1F0A0}";

const Card = function(props) {
  let className = "card-main";
  let unicode = CARD_BACK_UNICODE;

  //pile base should know if one card is placeable on another or not
  if (props.overlap) {
    className += " overlapping";
  }

  if (props.isTopCard) {
    unicode = props.unicode;
  }

  /**
   * event.dataTransfer.setData
   * @param1 - format - A DOMString representing the type of the drag data to add to the drag object.
   * @param2 - data - A DOMString representing the data to add to the drag object.
   */
  const dragStart = event => {
    event.dataTransfer.setData("id", event.target.id);
    event.dataTransfer.setData("card-props", JSON.stringify({ ...props }));
  };

  const dragOver = function(event) {
    event.preventDefault();
  };

  const dragDrop = function(event) {
    const data = event.dataTransfer.getData("id");
    console.log(data);
    console.log(event.target.id);
  };

  const style = { color: props.color };

  return (
    <div
      className={className}
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDrop={dragDrop}
      id={props.id}
    >
      <div className="card-body" style={style}>
        {unicode}
      </div>
    </div>
  );
};

export default Card;
