/**
 * Do-While Loop
 * ======================
 * Do-While loop 是while loop另一種寫法
 * 
 * 但有一點需要留意的是:
 * do-while loop會在驗証condition前, 執行一次code block,
 * 之後就會不斷重覆執行code block直到 condition = false
 * 
 * Syntax:
 * do {
 *  // code block to be executed
 * }
 * while (condition);
 *
 *
 * ----------------------
 *
 * So, here is the little quest:
 *
 * Please use the function "printNumber" to print out the expected output by do-while loop
 * 請用 "printNumber" 函式 + do-while loop 顯示出下方的答案
 * 
 * Expected output: 
 * 1
 * 10
 * 19
 * 28
 * 37
 * 46
 * 
 */

function printNumber(num) {
    console.log(num + 9);
}
