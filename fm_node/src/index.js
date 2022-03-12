import './style.css'
import Component from './Component';
import {pow} from './math';


console.time()
console.log(pow(456,88));
console.timeEnd();

console.time()
console.log(pow(456,88));
console.timeEnd();

console.time()
console.log(pow(456,88));
console.timeEnd();

console.time()
console.log(pow(999,99));
console.timeEnd();

const comp = new Component(12);
console.log(comp.render());



