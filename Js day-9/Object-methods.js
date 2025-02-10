// Methods of Objects in JavaScript

const student = {
    name: "John Doe",
    age: 25,
    class:12,
    marks : {
        physics: 85,
        chemistry: 90,
        mathematics: 80,
        hindi:56,
        english: 95
    }
}

// Delete Property from Object
// delete student.name;
// console.log(student);

// 1. hasOwnProperty() method - returns true if the object has the specified property, otherwise false.

// const ans = student.hasOwnProperty("name") 
// console.log(ans);  

// In Propery of Object
// if("name" in student){
//     console.log("Property Exist");
// }else{
//     console.log("Property Not Exist");
// }

// 2. Object.keys() method - returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

// const keys = Object.keys(student);
// console.log(keys);

// 3. Object.values() method - returns an array of a given object's own enumerable property values, iterated in the same order that a normal loop would.

// const values = Object.values(student);
// console.log(values);

// 4. Object.entries() method - returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.

// const entries = Object.entries(student);
// console.log(entries);

// Object.freeze() method - freezes an object: other code can't delete or change any properties.
// Object.freeze(student);
// student.dost = "Mayank";
// console.log(student);


// Simple Loop Over Object

for(let rakesh in student){
    console.log(rakesh, " => ",student[rakesh]);
}