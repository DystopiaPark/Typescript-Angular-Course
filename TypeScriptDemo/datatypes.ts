let lname: string;

lname = "Santosh";

let newname = lname.toUpperCase();

console.log(newname);

let age: number;

age = 25;
age = 25.5;

let dob = "25";

let result = parseInt(dob);

let isValid: boolean = false;

let empList: string[];

empList = ["Santosh", "Santosh1", "Santosh2"];

let numList: Array<number>; // ts generics

numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let results = numList.filter((num) => num > 2);

let num = numList.find((num) => num === 2);

let sum = numList.reduce((acc, num) => acc + num);

console.log(results);
console.log(num);
console.log(sum);

// lname = 10;
