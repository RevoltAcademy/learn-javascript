/**
 * Symbol
 * ================
 *
 * 最後一種基本型別就是 Symbol。
 *
 * Symbol是在特定情況才用到的值, 作為一個隱藏不可被猜到的值。
 */

var key = Symbol("unguessable");
var objectWithHiddenValue = {};
objectWithHiddenValue[key] = 42;

console.log("keys in the objectWithHiddenValue", Object.keys);
console.log("value of the hidden property", objectWithHiddenValue[key]);

/**
 * 你會發現我們不能直接讀取值 42, 除非透過已宣告的變數, key, 去讀取。
 *
 * 在平常的JS程式中, 我們很少會直接用到Symbol。
 * 它們多數會被用在一些底層的代碼, 例如 程式庫 (libraries) & 程式框架 (frameworks)
 *
 * 有興趣可以去這網頁了解更多 https://javascript.info/symbol
 */