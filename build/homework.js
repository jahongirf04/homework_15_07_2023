function swap(arg1, arg2) {
    [arg1, arg2] = [arg2, arg1];
    console.log(arg1, arg2);
}
function assertString(str) {
    if (typeof str == "string") {
        return true;
    }
    return "error: not string";
}
class Circle {
    accountArea(shape) {
        return shape.height * shape.width;
    }
}
class Rectangle {
    accountArea(shape) {
        return shape.height * shape.width;
    }
}
const circleShape = {
    height: 10,
    width: 20,
    accountArea() {
        return this.height * this.width;
    }
};
const rectangleShape = {
    height: 30,
    width: 50,
    accountArea() {
        return this.height * this.width;
    },
};
const circleArea = new Circle;
circleArea.accountArea(circleShape);
const rectangleArea = new Rectangle;
circleArea.accountArea(rectangleShape);
class Circle2 {
    accountArea(shape) {
        return shape.height * shape.width;
    }
}
class Rectangle2 {
    accountArea(shape) {
        return shape.height * shape.width;
    }
}
const circleShape2 = {
    height: 10,
    width: 20,
    accountArea() {
        return this.height * this.width;
    }
};
const rectangleShape2 = {
    height: 30,
    width: 50,
    accountArea() {
        return this.height * this.width;
    },
};
const circleArea2 = new Circle;
circleArea.accountArea(circleShape);
const rectangleArea2 = new Rectangle;
circleArea.accountArea(rectangleShape);
function returnPromise() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("OK");
        }, 2000);
    });
    promise.then((data) => {
        console.log(data.toLowerCase());
    });
    return promise;
}
function createPerson(name, age, address = "null") {
    const person = {
        ism: name,
        yosh: age,
        manzil: address
    };
    return person;
}
function calculate(n1, n2, func) {
    console.log(func(n1, n2));
}
calculate(1, 1, (n1, n2) => { return `${n1 + n2}\n${n1 - n2}\n${n1 * n2}\n${n1 / n2}`; });
function greting(ism, sharif = "null") {
    if (sharif == "null") {
        return `Salom, ${ism}`;
    }
    return `Salom, ${ism} ${sharif}`;
}
class Counter {
    constructor(count) {
        this.count = count;
    }
    increment() {
        this.count = this.count + 1;
    }
    getCount() {
        return this.count;
    }
}
class Vehicle {
    start() { }
    stop() { }
}
class Car extends Vehicle {
    nitro() { }
}
class MotorCycle extends Vehicle {
    drift() { }
}
class keyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    get getKey() {
        return this.key;
    }
    set setKey(neww) {
        this.key = neww;
    }
    get getValue() {
        return this.value;
    }
    set setValue(neww) {
        this.value = neww;
    }
}
class keyValuePair2 {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    get getKey() {
        return this.key;
    }
    set setKey(neww) {
        this.key = neww;
    }
    get getValue() {
        return this.value;
    }
    set setValue(neww) {
        this.value = neww;
    }
}
class StrangeClass {
    constructor(myArray) {
        this.myArray = myArray;
    }
    get getAll() {
        return this.myArray;
    }
    setArr(index, neww) {
        this.myArray[index] = neww;
    }
    add(neww) {
        this.myArray.push(neww);
    }
    deleteOne(index) {
        this.myArray.splice(index, 1);
    }
}
export {};
//# sourceMappingURL=homework.js.map