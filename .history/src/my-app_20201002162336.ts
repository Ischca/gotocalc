export class MyApp {
  night = 1;
  days = 2;
  people = 1;
  accommodationFee = 0;
  transportFee = 0;


  get total(): number {
    return this.accommodationFee;
  }

  get forOne(): number {
    return this.accommodationFee;
  }
}
