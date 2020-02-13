"use strict";

/**
 * Function Scopes
 * ================================
 * 
 * 函式(function)會建立自己的函式範疇(function scope)
 * 在函式中定義的變數(variable)或函式(function)只能在該函式範疇中使用
 *
 * 
 */

// Why there is an error??

function exampleFunction() {
    var x = "declared inside function";
    console.log("Inside function");
    console.log(x);
}

console.log(x);