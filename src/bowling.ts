export class Bowling {
  score: number = 0;
  rolls: Array<number>[] = [];

  roll(pins: number) {
    this.checkValidInput(pins);
    let last = this.getLastRound();

    if (this.isNewRound(last)) {
      this.rolls.push([]);
      last = this.getLastRound();
    }

    if (last.length === 1 && last[0] + pins > 10) {
      throw new Error("Max pins in a round is 10");
    }
    this.score += pins;
    if (last.length < 2) {
      last.push(pins);
    }
  }

  private isNewRound(last: number[]) {
    return !last || last.length === 2;
  }

  private checkValidInput(pins: number) {
    if (pins < 0) {
      throw new Error("At least 0");
    }
    if (pins > 10) {
      throw new Error("Max 10");
    }
  }

  private getLastRound() {
    return this.rolls[this.rolls.length - 1];
  }
}
