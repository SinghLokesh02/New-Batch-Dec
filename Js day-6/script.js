// String in Js

// let name1 = 'this is String 1';
// let name2 = "this is String 2";

// console.log(name1, name2);
// console.log(typeof name1,typeof name2);

// String Literals

// let name = "Rohit";
// let age = 25;

// Normal
// let para = "Hey My name is "+ name + " And my age is " + age;

// Using String literals

// let para = `Hey My name is ${name} and my age is ${age}`;
// console.log(para);

let gouri = ["Akansha", "Anchal", "Ashish", "Saurabh", "Leena"];

// for (let i = 0; i < gouri.length; i++) {
//   console.log(gouri[i]);
// }


// For Of Loop
// for(i of gouri){
//     console.log(i);
// }


// For In Loop
for(i in gouri){
    console.log(gouri[i]);
}