/**
 Creating Symbol
You use the Symbol() function to create a Symbol. For example,
 */
const x = Symbol()
console.log(typeof x); // symbol


//You can pass an optional string as its description. For example,
const x1 = Symbol('hey');
console.log(x1); // Symbol(hey)



const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false

/** Though value1 and value2 both contain the same description, they are different...*/