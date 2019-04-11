import Card from "./card";
import { SUITS, RANKS } from "./rules";

class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  static create() {
    const suits = Object.keys(SUITS);
    const ranks = Object.keys(RANKS);
    const cards = [];
    suits.forEach(suit => {
      ranks.forEach(rank => cards.push(new Card(suit, rank)));
    });
    return new Deck(cards);
  }

  getCards() {
    /** cloneing cards */
    return JSON.parse(JSON.stringify(this.cards));
  }
}

export default Deck;
