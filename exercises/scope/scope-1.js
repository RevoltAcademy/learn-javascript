"use strict"
/**
 * Function Scopes / Local Scopes
 * ================================
 *
 * 如果variable在function裡被定義, variable就會被 "本地化" (become LOCAL to the function)
 *
 * Local variable擁有function scope, 它們只限於function內存取
 *
 */

// Why there is an error??

function getNumber() {
    const num = 123;
}

console.log(num);