"use strict";
let lname;
lname = "Santosh";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
let empList;
empList = ["Santosh", "Santosh1", "Santosh2"];
let numList; // ts generics
numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNum = numList[0];
let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(results);
console.log(num);
console.log(sum);
let c = 2 /* Color.Blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
let department;
department = "IT";
department = 10;
