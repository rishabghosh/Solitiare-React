import Card from "./card";
import cardData from "../data/cardData";

class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  static create() {
    const cards = cardData.map(
      card => new Card(card.suit, card.rank, card.color, card.unicode)
    );
    return new Deck(cards);
  }

  getCards() {
    /** cloneing cards */
    return JSON.parse(JSON.stringify(this.cards));
  }
}
const deck = Deck.create();
export default deck;
