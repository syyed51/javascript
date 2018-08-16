/* jshint esversion: 6 */
import * as module from './module';
import greet from './module';
import {getSum} from './module';
import {getSum as sum} from './module';
import {multiply} from './module';

console.log({module});
greet("Tehseen");
console.log(getSum(2,3));
console.log(sum(3,4));
console.log(multiply(2,3));


