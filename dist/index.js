"use strict";
let ida = 5;
let company = 'ian';
let itscomplicated = true;
let x = 'hello';
let id = [1, 2, 3, 4, 5];
id.push(2);
let person = [1, 'tom', true];
let employee;
employee = [
    [1, 'ian'], [2, 'paul']
];
let ids;
ids = '22';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 2] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 4] = "Left";
    Direction1[Direction1["Right"] = 5] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Right);
const user = {
    id: 1,
    name: 'ian'
};
console.log(user);
let cid = 1;
let customerId = cid;
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
log('awesome');
const user3 = {
    id: 1,
    name: 'john',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registration`;
    }
}
const brad = new Person(1, 'steve');
const ian = new Person(2, 'john');
console.log(brad.register(), ian);
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, 'shawn', "developer");
console.log(emp.register());
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3,]);
let strArray = getArray(['brad', 'paul', 'mary']);
numArray.push(5);
