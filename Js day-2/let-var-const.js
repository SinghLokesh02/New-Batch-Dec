// Const - No redeclaration, No reassignment

const a = 10;
console.log("a = ",a); // 10

// a = 78;  TypeError: Assignment to constant variable. (Reassignment)

// const a = 78;  SyntaxError: Identifier 'a' has already been declared (Redeclaration)

// let - No redeclaration, reassignment

let b = 10;
console.log("b = ",b); // 10

b = 78;
console.log("b = ",b); // 78

// let b = 78; SyntaxError: Identifier 'b' has already been declared (Redeclaration)


// var - Redeclaration, reassignment

var c = 34;
console.log("c = ",c); // 10

c = 1233;
console.log("c = ",c); // 1233

var c = "abcdefghijklmn";
console.log("c = ",c); // "abcdefghijklmn"