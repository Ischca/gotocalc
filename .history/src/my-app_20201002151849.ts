export class MyApp {
  public message = 'Hello World!';

  night = 1;
  days = 2;
  accommodationFee = 0;
  transportFee = 0;

  toLocale(x){
    return x.toLocaleString('ja-JP');
  }
}
