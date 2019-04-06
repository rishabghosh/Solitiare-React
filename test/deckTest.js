import Deck  from "../src/model/deck";
import assert from "assert";

describe("getCards", () => {
  it("should return 52 cards", () => {
    const deck = Deck.create();
    const actual = deck.getCards().length;
    const expected = 52;
    assert.strictEqual(actual, expected);
  });
});
