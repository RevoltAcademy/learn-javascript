/**
 * 字串 String
 * ================
 * 
 * 字串在JS中是一種基本的型別
 * 字串是儲存有次序的字元(character)的合集
 * 
 * 你可以用 ", ', ` (double quote, single quote, back-tick) 去產生字串
 * 
 * 使用'或是" 去產生完全是取於個人開發習慣去決定，
 * 個人建議使用單一樣式去開發。
 * 這樣會易於維護及閱讀。
 * 
 */

console.log('香港獨立 是字串: ');
console.log("唯一出路 都是字串: ");
console.log(`遲啲23條立法,講都唔講得 都是字串`);

/**
 *
 * 但有一點需要留意, 就是back-tick, `。
 * 它除了可以用來產生字串, 還被賦有其他特性
 *
 */

var name = "香港人";
console.log(`${name}, 報仇!!!`);

/**
 *
 * 你會留意到名為name的變數(variable)被放進另一個字串中。
 * 這就是back-tick,`, 的樣板功能 (template literals)。
 *
 * ` 會從變數表達式 ( 用${...}標示 ) 中找出變數的值, 再放到字串中。
 *
 * 我們稱之為字串內插（string interpolation）
 *
 */