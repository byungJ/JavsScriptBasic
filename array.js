'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

// 3. Looping over an array
for (let value of fruits) {
    console.log(value);
}

// 배열의 수 만큼 돌면서 안의 값을 하나씩 찍어줍니다.
fruits.forEach(fruitvalue => console.log(fruitvalue))

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add and item to the benigging
fruits.unshift('딸기', '레몬');
console.log(fruits);

 // shift: remove an item from the benigging
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push (느리다.)
// splice: remove an item by index position

fruits.splice(0,1);
console.log(fruits);
fruits.splice(0,1, '수박', '자몽');
console.log(fruits);

// combine two arrays
const fruits2 = ['코코넛','체리'];
const newFruits = [fruits.concat(fruits2)];
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits.indexOf('바나나'));

// includes
console.log(fruits.includes('바나나'));

// lastIndexOf()
fruits.push('바나나');
console.log(fruits.lastIndexOf('바나나'));







