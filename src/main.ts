import Aurelia from 'aurelia';
import { Jump } from './jump';
//import * as globalComponents from './components/registry';
//import * as globalValueConverters from './value-converters/registry';
//import 'flatpickr/dist/flatpickr.min.css';

Aurelia
  // .register(
  //   globalComponents,
  //   globalValueConverters
  // )
  .app(Jump)
  .start();
