/**
 * Conditional Operators (?:)
 * ======================
 * a condition followed by a question mark (?),
 * then an expression to execute if the condition is truthy
 * followed by a colon (:), and finally the expression to execute if the condition is falsy. 
 *
 * !!This operator is frequently used as a shortcut for the if statement.!!
 * 
 * Adjust below code to print the message we need
 */

function getMessage() {
    return (false ? "freedom" : 'ccp');
}

console.log(getMessage());


// [There's more!] you can also assign a value with (?:). Try uncomment below code

// const val = true ? "yellow" : "blue";
// console.log(`I am ${val}.`)
