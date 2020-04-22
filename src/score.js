class Score {
  constructor(x, y, score = 0, color = '#0000', font = '16px Arial') {
    this.x = x;
    this.y = y;
    this.score = score;
    this.color = color;
    this.font = font;
  }

  increase() {
    this.score += 1
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.score}`, 8, 20);
  }
}

export default Score;
