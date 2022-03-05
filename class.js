'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // construtor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello`);
    }
}

const ep = new Person('kbj', 20);
console.log(ep.name);
console.log(ep.age);
ep.speak();

// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.age = age;
        this.lastName = lastName;
    }

    // 우리가 get을 정의하는 순간 this.age는 메모리에서 정보를 읽어오는 것이 아니고,
    // 바로  get age()를 읽습니다.(접근 합니다.)
    get age() {
        return this._age;
    }

    // set도 마찬가지로 정의를 하는순간 age를 읽는 것이 아니고,
    // 바로 우리가 정의한 set메서드를 호출합니다.
    // 그러므로 value를 this.age에 저장할때 메모리에 값을 업데이트 하는 것이 아니고,
    // set을 계속 호출하게 되고 call stack이 발생 합니다.
    // 이를 방지하기 위해서는 이름을 약간 다르게 할 필요성이 있습니다.
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Jab', -1);
// getter, setter 사용.
console.log(user1.age)

// 3. Fields (public, private)
class Experiment {
    // #기호를 붙히면 private, 그냥 선언을 하면 public
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.prvateField);

// 4. Static properties and methods
class Article {
    static publisher = 'egg potato';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 상속 & 다형성
// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        super.draw();
        console.log('삼각형(자식,,,위에는 super로 부모호출')
    }
    getArea() {
        return this.width * this.height / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true

// 함수 -> 메서드(위 아래는 같은 코드.)
// {
//     addOneItem(input_item) {
   
//     }
//     addOneItem: function() {

//     }
// }