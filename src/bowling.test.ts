import { Bowling } from "./bowling";

describe("Bowling game", () => {
  describe("Create Game", () => {
    it("should score be zero", () => {
      const game = new Bowling();
      expect(game.score).toBe(0);
    });

    it("should hit 1 pin", () => {
      const game = new Bowling();
      game.roll(1);

      expect(game.score).toBe(1);
      expect(game.rolls[0][0]).toBe(1);
    });

    it("should hit 4 pin", () => {
      const game = new Bowling();
      game.roll(4);

      expect(game.score).toBe(4);
      expect(game.rolls[0][0]).toBe(4);
    });

    it("should not hit -1 pin", () => {
      const game = new Bowling();

      expect(() => game.roll(-1)).toThrow("At least 0");
    });

    it("should not hit 11 pin", () => {
      const game = new Bowling();

      expect(() => game.roll(11)).toThrow("Max 10");
    });

    it("should hit 4 and 5 pin", () => {
      const game = new Bowling();
      game.roll(4);
      game.roll(5);

      expect(game.score).toBe(9);
      expect(game.rolls[0][0]).toBe(4);
      expect(game.rolls[0][1]).toBe(5);
    });

    it("should not hit 7 and 5 pin", () => {
      const game = new Bowling();
      game.roll(7);

      expect(() => game.roll(5)).toThrow("Max pins in a round is 10");
    });

    it("should not hit 3, 3, 7 and 8 pin", () => {
      const game = new Bowling();
      game.roll(3);
      game.roll(3);
      game.roll(7);

      expect(() => game.roll(8)).toThrow("Max pins in a round is 10");
    });

    it("should hit 3, 5, 7", () => {
      const game = new Bowling();
      game.roll(3);
      game.roll(5);
      game.roll(7);

      expect(game.score).toEqual(15);
      expect(game.rolls[0][0]).toBe(3);
      expect(game.rolls[0][1]).toBe(5);
      expect(game.rolls[1][0]).toBe(7);
    });
  });
});
