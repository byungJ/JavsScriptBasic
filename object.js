// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const egp = { name: 'kbj', age: 20 };

// 중간에 추가, 삭제가 가능 (하지만 추천하지 않는다.)
egp.hasJob = true;
delete egp.hasJob;

// 2. Computed properties
// key should be always string
// 보통의 상황에서는 . 사용,, 값을 모르거나 실시간으로 받아야 하는 경우에는 ['']사용.
console.log(egp.name);
console.log(egp['name']);
egp['hasJob'] = true;
console.log(egp.hasJob);

// 사용자한테 입력을 받아서 obj, key를 받아서 key를 출력.
// 나중에 동적으로 key에 대한 value를 받아야하는 경우 유용.
function printValue(obj, key) {
    console.log(obj.key);
    console.log(obj[key]);

}

// key를 전달할때는 항상 string type으로 전달.
printValue(egp,'name');

// 3. Property value shorthane
const person1 = { name : 'bob', age : 2 };
const person2 = { name : 'steve', age : 3 };
const person3 = { name : 'dave', age : 4 };

// 4. Constructor Funtion
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in egp);
console.log('cjdtkseh' in egp);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in egp) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for(let i = 0; i < array.length; i++) {
    console.log(array[i])
}

for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'kbj', age: '20'};
const user2 = user;

const user3 = Object.assign({}, user);
console.log(user3);