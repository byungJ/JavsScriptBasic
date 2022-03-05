// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Funcation declaration
// fuction name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> careateCard, createPoint
// function is object in JS
function printHello() {
    console.log('hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello')

// 2. Parameters
// peremitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'potato';
}
const ep = { name: 'egg' };
changeName(ep);
console.log(ep);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'eggpotato') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!!');

// 4. Rest parameters (added in ES6) -  배열형태로 전달 받는다.
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('egg', 'potato', 'kbj');

// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
    
    }
}

// good
function upgradeUser(user) {
    if(user.point <=10) {
        return;
    }
    // long upgrade logic....
}

//First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
print = function () { //anonymous function
    console.log('print');
}
print();
const printAgin = print;
printAgin();
const sumAgin = sum;
console.log(sumAgin(1,3));

// 2. Callback function using function expreesion
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('yes!!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log("no!!");
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!!');
}

// 간단하게 한줄로 끝나면 {}이 필요 없지만 {}안에서 더 다양한 기능을 하도록 작성을 한다면,
// {}안에 꼭 return 을 해줘야 합니다.
const simplePrintArrow = () => console.log('simpleArrow');
const simpleMultiply = (a,b) => {
    //do someting more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();