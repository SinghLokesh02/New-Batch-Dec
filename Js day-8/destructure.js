// Array Destructuring

const names = ["John", "Jane", "Doe", "Smith"];

// const name1 = names[0];
// const name2 = names[1];
// const name3 = names[2];

// console.log(name1, name2, name3);

// Destructure
// const [name1,name2,name3] = names;
// console.log(name1, name2, name3);


// Skip Values of Array

// const [,,name1,,name2] = names;
// console.log(name1,name2);

// Get the Last Value of Array using Destructuring

// Give me a List of 50 Names

const namesList = ["John", "Jane", "Doe", "Smith", "Alex", "David", "Mike", "Tom", "Jerry", "Harry", "Peter", "Sam", "Max", "Jack", "John", "Jane", "Doe", "Smith", "Alex", "David", "Mike", "Tom", "Jerry", "Harry", "Peter", "Sam", "Max", "Jack", "John", "Jane", "Doe", "Smith", "Alex", "David", "Mike", "Tom", "Jerry", "Harry", "Peter", "Sam", "Max", "Jack", "John", "Jane", "Doe", "Smith", "Alex", "David", "Mike", "Tom", "Jerry", "Harry", "Peter", "Sam", "Max", "Jack"];


const [lastName,,thirdName,...restName] = namesList.reverse();
console.log(lastName,thirdName);
console.log(restName);

