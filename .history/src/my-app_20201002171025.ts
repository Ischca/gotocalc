import { BigNumber } from "bignumber.js";

export class MyApp {
  night = 1;
  days = 2;
  people = 1;
  accommodationFee:number = 0;
  // transportFee = 0;

  get total(): number {
    return new BigNumber(this.accommodationFee).div(this.night).toNumber();
  }

  get discountAmount(): number {
    return this.accommodationFee * 0.5 * 0.7;
  }

  get couponAmount(): number {
    return Math.floor(this.accommodationFee * 0.5 * 0.3);
  }
}