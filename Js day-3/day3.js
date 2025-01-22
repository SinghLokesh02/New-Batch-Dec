console.log("Hello world!");

// Operators in JavaScript

// 1. Arithematic Operators - (+, -, *, /, %)
let a = 78;
let b = 2;
console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a-b);
console.log("a / b = ",a/b);
console.log("a % b = ",a%b);

// Relational Operators (>, <, >=, <=, ==,!=, ===, !==)

let c = 56;
let d = 78;
console.log("Relational Operators");
console.log("c > d = ",c>d);
console.log("c < d = ",c<d);
console.log("c >= d = ",c>=d);
console.log("c >= d = ",c<=d);
console.log("a+b" == 5);
console.log("5" === 5);
console.log("5" != 5);


// Assignment Operators - (=, +=, -=, *=, /=)

let age = 18;

console.log("Assignment Operators");
console.log(age);

age += 2; //age = age + 2;
console.log(age);

age -= 3; //age = age - 3;
console.log(age);

age *= 4; //age = age * 4;
console.log(age);


// Logical Operator (and, or, not)
let rahulage = 34;
let mukeshage = 32;
let rakeshage = 34;
console.log("Logical Operators");
console.log(rahulage == rakeshage && rahulage == mukeshage);
console.log(rahulage == rakeshage || rahulage == mukeshage);
console.log(!(rahulage == rakeshage || rahulage == mukeshage));


// Bitwise Operators (>>, <<)

console.log(1024%2  == 0);
