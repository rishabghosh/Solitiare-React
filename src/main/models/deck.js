import Card from "./card";
import cardData from "../data/cardData";

class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  static create() {
    const cards = cardData.map(
      (card, id) => new Card(card.suit, card.rank, card.color, card.unicode, id)
    );
    return new Deck(cards);
  }

  getCards() {
    return this.cards;
  }

  getShuffledCards(shuffler) {
    shuffler.shuffle();
  }

  getCardById(id) {
    const requiredCard = this.cards.filter(card => card.id === id);
    return requiredCard[0];
  }

  getWastePile() {}
}

const deck = Deck.create();
export default deck;
