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
    const index = destinationPileNumber - 1;
    const destinationPile = this.piles[index];
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

  _searchPile(cardId) {
    for (let index = 0; index < this.piles.length; index++) {
      const pile = this.piles[index];
      const card = pile.find(card => card.id === cardId);
      if (card) return pile;
    }
  }

  moveCard(cardId, destinationPileNumber) {
    const removedCard = this.removeCard(cardId);
    this.addCard(removedCard, destinationPileNumber);
  }

  moveMultipleCards(cardId, destinationPileNumber) {
    const sourcePile = this._searchPile(cardId);
    console.log("sourcePile is ", sourcePile);

    const card = this.getCard(cardId);
    console.log("card is", card);

    const indexOfCard = sourcePile.indexOf(card);
    const lastIndex = sourcePile.length - 1;

    //get all cards from the index to the last
    const removedCards =
      sourcePile.length === 1
        ? sourcePile.splice(0, 1)
        : sourcePile.splice(indexOfCard, lastIndex);

    console.log("removed cards are ", removedCards);
    removedCards.forEach(card => {
      this.addCard(card, destinationPileNumber);
    });
  }
}

const tableau = new Tableau(deck.getWastePile());

export default tableau;
