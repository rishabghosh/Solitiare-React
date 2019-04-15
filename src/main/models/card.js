class Card {
  constructor(suit, rank, color, unicode) {
    this.suite = suit;
    this.rank = rank;
    this.color = color;
    this.unicode = unicode;
  }

  getSuit() {
    return this.suite;
  }

  getRank() {
    return this.rank;
  }

  getColor() {
    return this.color;
  }

  getUnicode() {
    return this.unicode;
  }

  canPlayOnTopOf(card) {
    return card.color !== this.color && +this.rank + 1 === +card.rank;
  }

}

export default Card;
