const dragAndDrop = function() {
  const card = document.querySelector(".card-main");
  const bases = document.querySelectorAll(".base");
  console.log("card is ", card);
  console.log("bases are", bases);

  const dragOver = function(event) {
    event.preventDefault();
    console.log("dragging over");
  };

  const dragDrop = function() {
    console.log("dropping");
    this.append(card);
  };

  for (const base of bases) {
    base.addEventListener("dragover", dragOver);
    base.addEventListener("drop", dragDrop);
  }
};

export default dragAndDrop;
