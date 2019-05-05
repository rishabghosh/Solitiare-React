import deck from "./deck";

/**
 * Tableau should get a wastePile from outside
 * basically deck.getWastePile()
 * _createWastePile creates the initial 7 waste piles
 *
 */

class Tableau {
  constructor(pileCards) {
    this.pileCards = [...pileCards];
    this.piles = this._createInitialPiles();
  }

  _createInitialPiles() {
    const pileCardsClone = [...this.pileCards];
    const piles = [];
    for (let count = 1; count <= 7; count++) {
      const cards = pileCardsClone.splice(0, count);
      piles.push(cards);
    }
    return piles;
  }

  getCard(cardId) {
    return this.pileCards.find(card => card.id === cardId);
  }

  getPiles() {
    return JSON.parse(JSON.stringify(this.piles));
  }

  getWastePile() {
    return this.pileCards;
  }

  addCard(card, destinationPileNumber) {
    const destinationPile = this.piles[destinationPileNumber];
    destinationPile.push(card);
  }

  removeCard(cardId) {
    let removedCard;

    for (let index = 0; index < this.piles.length; index++) {
      const pile = this.piles[index];
      const card = pile.find(card => card.id === cardId);

      if (card) {
        const indexOfCard = pile.indexOf(card);
        removedCard = pile.splice(indexOfCard, 1)[0];
        break;
      }
    }
    return removedCard;
  }

  moveCard(cardId, destinationPileNumber) {
    const removedCard = this.removeCard(cardId);
    this.addCard(removedCard, destinationPileNumber);
  }
}

const tableau = new Tableau(deck.getWastePile());

export default tableau;
