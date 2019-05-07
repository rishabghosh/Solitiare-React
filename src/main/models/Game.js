import Foundation from "./foundation";

class Game {
  constructor() {
    this.foundations = this._createFoundations();
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
    const requiredFoundation = this.foundations[index];
    requiredFoundation.addCard(card);
    return [...this.foundations];
  }

  getFoundations() {
    return JSON.parse(JSON.stringify(this.foundations));
  }
}

const game = new Game();
export default game;
