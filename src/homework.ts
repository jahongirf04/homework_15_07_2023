// Homework 1
function swap(arg1: number, arg2: number): void{
    [arg1, arg2] = [arg2, arg1]
    console.log(arg1,arg2);
}
// Homework 2
function assertString(str: string): any{
    if (typeof str == "string"){
        return true
    }
    return "error: not string"
}
// Homework 3
// ATTETION!!! 
// Torisini etganda misoli shartiga unchali chumadim lekin chunganimcha qildim
interface IShape {
    height: number
    width: number
    accountArea: ()=>{}
}

class Circle {
    accountArea(shape: IShape){
        return shape.height * shape.width
    }
}

class Rectangle {
  accountArea(shape: IShape) {
    return shape.height * shape.width;
  }
}

const circleShape: IShape = {
    height: 10,
    width: 20,
    accountArea(): number {
        return this.height * this.width
    }
}

const rectangleShape: IShape = {
  height: 30,
  width: 50,
  accountArea(): number {
    return this.height * this.width;
  },
};

const circleArea = new Circle
circleArea.accountArea(circleShape)
const rectangleArea = new Rectangle;
circleArea.accountArea(rectangleShape);
// Homework 4
// ATTETION!!! 
// Torisini etganda misoli shartiga unchali chumadim lekin chunganimcha qildim
interface IShape {
    height: number
    width: number
    accountArea: ()=>{}
}

class Circle2 {
    accountArea(shape: IShape){
        return shape.height * shape.width
    }
}

class Rectangle2 {
  accountArea(shape: IShape) {
    return shape.height * shape.width;
  }
}

const circleShape2: IShape = {
    height: 10,
    width: 20,
    accountArea(): number {
        return this.height * this.width
    }
}

const rectangleShape2: IShape = {
  height: 30,
  width: 50,
  accountArea(): number {
    return this.height * this.width;
  },
};

const circleArea2 = new Circle
circleArea.accountArea(circleShape)
const rectangleArea2 = new Rectangle;
circleArea.accountArea(rectangleShape);
// Homework 5
function returnPromise (): any {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("OK");
      }, 2000);
    });
    promise.then((data) => {
      console.log(data.toLowerCase());
    });
    return promise
}
// Homework 6
interface IPerson {
    ism: string,
    yosh: string,
    manzil: string
}

function createPerson(name: string, age: string, address : string = "null" ): IPerson{
    const person: IPerson = {
        ism: name,
        yosh: age,
        manzil: address
    }
    return person
}
// Homework 7
function calculate(n1: number, n2: number, func: Function){
    console.log(func(n1,n2));
}

calculate(1,1,(n1: number, n2: number)=>{return `${n1 + n2}\n${n1-n2}\n${n1*n2}\n${n1/n2}`})
// Homework 8
interface IAnimal {
    name: string,
    makeSound: ()=>{}
}

interface ICat extends IAnimal {
    color: string,
}
interface IDog extends IAnimal {
  size: string;
}
// Homework 9
function greting(ism: string, sharif: string = "null"): any{
    if (sharif=="null"){
        return `Salom, ${ism}`
    }
    return `Salom, ${ism} ${sharif}`
}
// Homework 10
class Counter {
  private count: number
      constructor(
        count: number
      ){
        this.count = count
      }
      increment() {
  this.count = this.count + 1
}
getCount(){
  return this.count
}
}
// Homework 11
abstract class Vehicle {
  start() {}
  stop() {}
}

abstract class Car extends Vehicle{
  nitro(){}
}

abstract class MotorCycle extends Vehicle{
  drift(){}
}
// Homework 12
class keyValuePair {
  key: number | string;
  value: number | string;
  constructor(key: number | string, value: number | string) {
    this.key = key;
    this.value = value;
  }
  get getKey() {
    return this.key;
  }
  set setKey(neww: any) {
    this.key = neww;
  }
  get getValue() {
    return this.value;
  }
  set setValue(neww: any) {
    this.value = neww;
  }
}
// Homework 13
class keyValuePair2 <T>{
  key: T;
  value: T;
  constructor(key: T, value: T) {
    this.key = key;
    this.value = value;
  }
  get getKey(): T {
    return this.key;
  }
  set setKey(neww: T) {
    this.key = neww;
  }
  get getValue(): T {
    return this.value;
  }
  set setValue(neww: T) {
    this.value = neww;
  }
}
// Homework 14
abstract class StrangeClass<T>{
  private myArray: Array<T>
  constructor(myArray: Array<T>){
    this.myArray = myArray
  }
  get getAll(){
    return this.myArray
  }
  setArr(index: number, neww: T){
    this.myArray[index] = neww
  }
  add(neww: T){
    this.myArray.push(neww)
  }
  deleteOne(index: number){
    this.myArray.splice(index,1)
  }
}