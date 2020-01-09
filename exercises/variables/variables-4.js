/**
 * Declare a variable
 * ======================
 * 
 * 1. Variable declared by "let" / "const" CANNOT be redeclared in the same scope.
 * 2. The value of the variable declared by "const" CANNOT be re-assigned.
 * 
 * Resolve below errors.
 */
let item = 123;
let item = "hahaha"

console.log(`item = ${item}`);

const item2 = 234;
const item2 = 456;

console.log(`item = ${item2}`);