export class MyApp {
  night = 1;
  days = 2;
  people = 1;
  accommodationFee = 0;
  // transportFee = 0;

  get total(): number {
    return this.accommodationFee;
  }

  get forOne(): number {
    return this.total / this.people - this.discountAmount;
  }

  get discountAmount(): number {
    return Math.floor(this.total * 0.5 * 0.7);
  }
}