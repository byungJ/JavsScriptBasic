'use strict'

// Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion (타입까지 검사.)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ep1 = { name: 'kbj' };
const ep2 = { name: 'kbj' };
const ep3 = ep1;
console.log(ep1 == ep2); //false
console.log(ep1 === ep2); //flase
console.log(ep1 == ep3); //true
console.log(ep1 === ep3); //true

console.log(null == undefined); //true
console.log(null === undefined); //false

// Ternary operator: ?
// condition ? value1 : value2;
{
    const name = 'ep';
    console.log(name === 'ep' ? 'yes' : 'np');
}