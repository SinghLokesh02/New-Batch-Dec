let name1 = "Rohit Gupta";
let name2 = "Anchal Verma";
let name3 = "Rohit Prajapati";

console.log(name1,name2,name3);

console.log("Nam1 = ",name1)



// String ki length
let x = name3.length;
console.log(x);

// Uppercase - This function is used to convert the string into uppercase
let upr = name2.toUpperCase();
console.log(upr);

// Lowercase - This function is used to convert the string into lowercase
let lwr = name2.toLowerCase();
console.log(lwr);


// Indexing in String
console.log(name1[3]);
console.log(name3[name3.length-2])

// Slice - This function is used to extract a substring from a string
let slc = name1.slice(3,name1.length);
console.log(slc);

// Substring- This function is used to extract a substring from a string
let substr = name1.substring(3,name1.length);
console.log(substr);

// Replace - This function is used to replace a substring with another substring
let naam2 = name2.replace("Verma","Sharma");
console.log(naam2);

// Concat - This function is used to concat multiple strings
let firstName = "Shiksha";
let lastName = "Dwivedi";
// let fullName = firstName.concat(lastName);
// console.log(fullName);
let fullName = firstName + " " + lastName;
console.log(fullName);

// Trim - This function is used to remove the extra spaces from the string
let str = "    Hello World    ";
console.log(str);
let trim = str.trim();
console.log(trim.length);


// trimStart - This function is used to trim the extra spaces from the start of the string

let str1 = "    Hello World    ";
console.log(str1);
let trimStart = str1.trimStart();
console.log(trimStart.length);

// trimEnd - This function is used to trim the extra spaces from the end of the string
let str2 = "    Hello World    ";
console.log(str2);
let trimEnd = str2.trimEnd();
console.log(trimEnd.length);

