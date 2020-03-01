/**
 * Undefined 未定義 & Null 空
 * ============================
 *
 * Undefined & Null 都是基本型別。
 *
 * 雖然兩者有分別 (不在此討論 http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf)，
 * 但它們的值目的是標示空值 (emptiness of a value)
 *
 */

if (undefined) {
    console.log("huh?")
}

if (null) {
    console.log("Errr....")
}

/**
 * 上述例子的兩個字串都不會在console出現,
 * 因為 undefined & null 在條件中會當作 false 處理。
 *
 * 但觀看以下例子:
 */

var nullValue = null;
if (nullValue == undefined) {
    console.log("我不想出現");
}

/**
 * 你會發現 "我不想出現" 這字串會出現於console。
 * 這正因為null不等於undefined, 雖然它們都是代表空值。
 *
 * 為了方便於維護, 個人建議盡量只使用其中一個 (undefined / null) 來代表空值。
 *
 */