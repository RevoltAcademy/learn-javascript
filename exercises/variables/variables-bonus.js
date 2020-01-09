/**
 * Assigning a value in Strict mode
 * ======================================
 * The statement “use strict”; instructs the browser
 * to use the Strict mode, which is a reduced and safer feature set of JavaScript.
 * 
 * Resolve below error
 */

a = 123;
console.log(`You have created a variable "a" with a value, ${a}`);

(() => {
    "use strict";
    b = 246
    console.log(`You have created a variable "b" with a value, ${b}`);
})()
