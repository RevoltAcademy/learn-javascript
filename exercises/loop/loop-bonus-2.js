/**
 * For/In Loop
 * ======================
 * For/In Loop loops through the properties of an object:
 * 
 * Syntax:
 * for (key in object) {
 *      // code block to be executed
 * }
 * 
 * key = 在每個loop中, 下一個屬性的名字 (name of the object property) 都會被放進 (assign) key中 
 * p.s. key 可以以 const, let, 或 var 來宣告 (declaration).
 * 
 * object = 物件 (Object), e.g {fname:"John", lname:"Doe", age:25}
 * p.s. "fname", "lname", "age" are properties.
 *
 * Example
 * ----------------------
 * https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_for_in
 * 
 * 
 * ----------------------
 *
 * So, here is the little quest:
 *
 * Please use the console.log to print out expected output by for/in loop
 * 請用 "console.log" + for/in loop 顯示出下列結果
 * 
 * Expected output: 
 * 12
 * 24
 * 56
 * 43
 * 
 */

const object = {
    a: 12,
    b: 24,
    c: 56,
    d: 43
};

