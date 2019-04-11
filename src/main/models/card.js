class Card {
  constructor(suit, rank) {
    this.suite = suit;
    this.rank = rank;
  }

  getSuit() {
    return this.suite;
  }

  getRank() {
    return this.rank;
  }
}

export default Card;

