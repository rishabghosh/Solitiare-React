import Card from "../src/model/card";
import assert from "assert";

describe("Card", () => {
  const suit = "_H"; //hearts
  const rank = "Ace";
  const card = new Card(suit, rank);

  it("getSuit method should return the suit", () => {
    const actual = card.getSuit();
    const expected = suit;
    assert.strictEqual(actual, expected);
  });

  it("getRank method should return the rank", () => {
    const actual = card.getRank();
    const expected = rank;
    assert.strictEqual(actual, expected);
  });
});
