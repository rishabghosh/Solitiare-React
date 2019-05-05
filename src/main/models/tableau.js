import deck from "./deck";

/**
 * Tableau should get a wastePile from outside
 * basically deck.getWastePile()
 * _createWastePile creates the initial 7 waste piles
 *
 */

class Tableau {
  constructor(wastePile) {
    this.wastePile = [...wastePile];
    this.piles = this._createInitialPiles();
  }

  _createInitialPiles() {
    const piles = [];
    let mean = 1;
    for (let count = 0; count < 7; count++) {
      const cards = this.wastePile.slice(count, count + mean);
      piles.push(cards);
      mean++;
    }
    return piles;
  }

  getCard(cardId) {
    return this.wastePile.find(card => card.id === cardId);
  }

  getPiles() {
    return this.piles;
  }

  getWastePile() {
    return this.wastePile;
  }
}

const tableau = new Tableau(deck.getWastePile());
export default tableau;
