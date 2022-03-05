console.log('Hello World');

// 1. Use strict
// added in ES5
// use this for Valina Javascript.
'use strict';

// 2. Variable, rw(read / write)
// let (added in ES6)
{
    let name = 'eggpotato';
    console.log(name);
    name = 'hello';
    console.log(name);
}

// var (don't ever use this!!)
// var hoisting (move declaration from bottom to top)
// 선언이 어디에 있던지 맨 위로 끌어 올립니다.
// has no block scope (블록이 적용이 안됩니다.)

// 3. Constant, r(read only)
// use const whenerver possible.
// favor immutable  data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const dayInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value ${count }, type: ${typeof count}`);
console.log(`value ${size }, type: ${typeof size}`);

//number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const nefativeInfinity = -1/0;
const nAn = 'not a namber' / 2;
console.log(infinity);
console.log(nefativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123432452345324523452345234523454322345n; //over (-2**53) ~ 2**53)
console.log(`value ${bigInt }, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type ${typeof nothing}`);

// undefined
let x = undefined;
console.log(`value: ${x}, type ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2); // false

const fSymbol1 = Symbol.for('id');
const fSymbol2 = Symbol.for('id');
console.log(fSymbol1===fSymbol2); // true

// symbol은 출력할때 .description 붙혀서 string으로 변경해서 출력해줘야 합니다.
console.log(`value: ${symbol1.description}, type ${typeof symbol1}`);

// object, real-life object, data structure
const eggpotato = { name: 'eggpotato', age:20 };
eggpotato.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type ${typeof text}`);

text = 1;
console.log(`value: ${text}, type ${typeof text}`);

text = '7' + 5;
console.log(`value: ${text}, type ${typeof text}`);

text = '8' / '2'
console.log(`value: ${text}, type ${typeof text}`);

