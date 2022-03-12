import './style.css'
import Component from './Component';
import secret, * as MyMath from './math';
console.log(MyMath);

const resultOfPow = MyMath.pow(5,3);
console.log(resultOfPow);
const comp = new Component(12);
console.log(comp.render());
console.log(secret());


