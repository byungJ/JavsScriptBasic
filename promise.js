'use strict';

// Promise is a JavaScript object for asynchronous peration.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read file)
    console.log('doing something...');
    setTimeout(() => {
        // 성공했을때...
        //resolve('kbj');

        // 실패했을때...
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
// then: value에는 정상적으로 실행됐을때 resolve의 값이 들어갑니다.
promise.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => console.log('finally 성공/실패 상관없이 항상 출력....'));

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓', 1000));
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    })

const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

//getHen()
//.then(hen => getEgg(hen))
//.then(egg => cook(egg))
//.then(meal => console.log(meal));

// 받은 값(value)을 그대로 사용하는 경우 아래처럼 변경해줄 수 있습니다.(위와 결과는 같음.)
console.clear()
getHen()
.then(getEgg)
.catch(error => {
    return '🎂';
})
.then(cook)
.then(console.log)
.catch(console.log);
console.log(`testsetsetsetsetset`)