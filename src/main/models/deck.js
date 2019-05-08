import Card from "./card";
import _ from "lodash";
import cardData from "../data/cardData";

class Deck {
  constructor(cards, wastePile, stack) {
    this.cards = cards;
    this.wastePile = wastePile;
    this.stack = stack;
  }

  static create(shuffle) {
    const cards = cardData.map(
      (card, id) => new Card(card.suit, card.rank, card.color, card.unicode, id)
    );

    const shuffledCards = shuffle(cards);
    const wastePile = shuffledCards.slice(0, 28);
    const stack = shuffledCards.slice(48);
    console.log("deck stack is ", stack);
    console.log("-------------")
    return new Deck(cards, wastePile, stack);
  }

  getCardById(id) {
    const requiredCard = this.cards.filter(card => card.id === id);
    return requiredCard[0];
  }

  getWastePile() {
    return this.wastePile;
  }

  getStack() {
    return [...this.stack];
  }
}

const deck = Deck.create(_.shuffle);

export default deck;
