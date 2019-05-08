import Foundation from "./foundation";
import deck from "./deck";
import tableau from "./tableau";

//removeCards, getPiles, getMultipleCards

class Game {
  constructor() {
    this.foundations = this._createFoundations();
    this.stack = deck.getStack();
    this.piles = tableau.getPiles();
  }

  getPiles() {
    return JSON.parse(JSON.stringify(this.piles));
  }

  moveCardsInTableau(cardId, targetPileId) {
    tableau.moveCards(cardId, targetPileId);
  }

  removeCardFromTableau(cardId) {
    return tableau.removeCard(cardId);
  }

  _createFoundations() {
    const foundations = [];
    //count start from 1 because then we can use it in if conditions
    //if it starts from 0 then if condition will be false
    for (let count = 1; count <= 4; count++) {
      foundations.push(new Foundation(count));
    }
    return foundations;
  }

  addToFoundation(foundationIdNumber, card) {
    const index = foundationIdNumber - 1;
    const foundation = this.foundations[index];
    foundation.addCard(card);
    return [...this.foundations];
  }

  getFoundations() {
    return JSON.parse(JSON.stringify(this.foundations));
  }

  getStack() {
    return [...this.stack];
  }

  removeCardFromStack(cardId) {
    let removedCard;
    this.stack.forEach((card, index) => {
      if (cardId === card.id) removedCard = this.stack.splice(index, 1)[0];
    });
    return removedCard;
  }
}

const game = new Game();
export default game;
