class Foundation {
  constructor(idNumber) {
    this.cards = [];
    this.idNumber = idNumber;
  }

  getFoundation() {
    return [...this.cards];
  }

  getIdNumber() {
    return this.idNumber;
  }

  addCard(card) {
    this.cards.push(card);
    return [...this.cards];
  }

  removeCard() {
    const removedCard = this.cards.pop();
    return removedCard;
  }
}

export default Foundation;
