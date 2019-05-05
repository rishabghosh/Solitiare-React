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
    const wastePileClone = [...this.wastePile];
    const piles = [];
    for (let count = 1; count <= 7; count++) {
      const cards = wastePileClone.splice(0, count);
      piles.push(cards);
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

export default Tableau;
