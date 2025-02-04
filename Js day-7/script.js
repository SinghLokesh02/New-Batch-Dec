// Split function of String

// let str = "Hello World Rohit Mayank Anish";
// let splitStr = str.split(" ");
// console.log(splitStr);


// Join function of Array

// let arr = ["Hello", "World", "Rohit", "Mayank", "Anish"];
// let joinArr = arr.join(" ");
// console.log(joinArr);

// Convert String to Number
// Method - 1
// let age = +"567";
// console.log(typeof age ,age)

// Method - 2
// let age = "578";
// age = Number(age);
// console.log(typeof age ,age)

// Method - 3
// let age = '68';
// age = parseInt(age);
// console.log(typeof age, age);


// String Concat Methods
let firstName = "John";
let lastName = "Cena";

// Method 1 (+)
// let fullName = firstName + lastName;
// console.log(fullName);

// Method 2 (concat())
// let fullName = firstName.concat(lastName);
// console.log(fullName);

// Method 3 (Template literals)
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);


// Truthy and falsy Values

// Falsy Values - 0, null, undefined, "", -0, NaN, false
// let age = "";
// if(age){
//     console.log("Age is truthy");
// } else {
//     console.log("Age is falsy");
// }


// Break And Continue Statements

// for(let i = 0; i<=10; i++){
//     if(i == 5){
//         break;
//     }
//     console.log(i)
// }

// Give me List of 20 Distinct Girls Name 

let girls = ["Anaya", "Bella", "Cathy", "Diana", "Ella", "Frankie", "Grace", "Hannah", "Ivy", "Jackie", "Kendra", "Lily", "Mia", "Nora", "Akansha", "Penelope", "Quinn", "Rose", "Sophia", "Tasha"];
 
// for(i in girls){
//     if(girls[i] == "Akansha"){
//         console.log("Akansha is found");
//         console.log(i);
//         break;
//     }
//     console.log(girls[i]);
// }

// Continue
// for(i in girls){
//     if(girls[i] == "Akansha"){
//          continue;
//     }
//     console.log(girls[i]);
// }
