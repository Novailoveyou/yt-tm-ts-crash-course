"use strict";
let id = 5;
let company = 'Novailoveyou';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
let person = [1, 'Nover', true];
let employee;
employee = [
    [1, 'Nover'],
    [2, 'Brad'],
    [4, 'Jill']
];
let pid = 22;
pid = '22';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
let cid = 1;
let customerId = cid;
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const nover = new Person(1, 'Nover Lawel');
const mike = new Person(2, 'Mike Jordan');
console.log(nover, mike);
