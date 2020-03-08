# 值 (Value) 與 變數 (Variable) #

## 值 (Value) ##

值 (Value) 在JS中有兩種形態:

- Primitive (原始/基本值), i.e. 非物件的值
- Object (物件值)

在這頁, 你將會學到何為value in javascript。

----

### 字串 String ###

字串在JS中是一種基本的型別。

字串是儲存有次序的字元(character)的合集

你可以用 " , ' , ` (double quote, single quote, back-tick) 去產生字串。

使用 ' 或是 " 去產生完全是取於個人開發習慣去決定，
個人建議使用單一樣式去開發。
這樣會易於維護及閱讀。

```javascript
'香港獨立'              // 用 ' 的字串
"唯一出路"              // 用 " 的字串
`遲啲23條立法,講都唔講得` // 用 ` 的字串
```

但有一點需要留意, 就是back-tick, `。
它除了可以用來產生字串, 還被賦有其他特性。

請看下例。

```javascript
var name = "香港人";
console.log(`${name}, 掙扎!!!`);

// result = 香港人, 掙扎!!!
```

你會留意到名為name的變數(variable)被放進另一個字串中。
這就是back-tick, ` , 的樣板功能 (template literals)。

` 會從變數表達式 ( 用${...}標示 ) 中找出變數的值, 再放到字串中。

我們稱之為字串內插（string interpolation）。

----

### 數字 Number ###

```javascript
console.log(7);
console.log(21)
console.log(8.31);
```

顯而易見, 數字就是一種基本型別。

數字另一個變種是BigInt, 用作儲存非常大的數字 (值大於(2^53 - 1))。
平時很少機會會用到BigInt, 故不在此詳述。

有與趣知更多的朋友, 可[按此了解 BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。

----

### 布林 Boolean ###

正如 "呢球波, 一係入, 一係唔入",

布林值也一樣, 只有兩種: `true` & `false` (對與錯)。

```javascript
var popo_is_murderer = false;

while (popo_is_murderer) {
    console.log("報仇");
}
```

`while`是一種循環式。
只要條件 (condition) 是對, 就可以不斷循環執行區塊中的代碼。

所以從上例看到,
只要 `popo_is_murderer` 這變數的值為**真**, `"報仇"` 字串會不斷出現。

----

### Undefined 未定義 & Null 空 ###

Undefined & Null 都是基本型別。

雖然兩者有分別 (不在此討論, 詳情可看它們的[定義](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf) ),

但它們的值目的是標示空值 (emptiness of a value)。

```javascript
if (undefined) {
    console.log("huh?")
}

if (null) {
    console.log("Errr....")
}
```

上述例子的兩個字串都不會在console出現,

因為 undefined & null 在條件中會當作 false 處理。

但觀看以下例子:

```javascript
var nullValue = null;
if (nullValue == undefined) {
    console.log("我不想出現");
}
```

你會發現 "我不想出現" 這字串會出現於console。
這正因為null不等於undefined, 雖然它們都是代表空值。

為了方便於維護, 個人建議盡量只使用其中一個 (undefined / null) 來代表空值。

----

### Symbol ###

最後一種基本型別就是 Symbol。

Symbol是在特定情況才用到的值, 作為一個隱藏不可被猜到的值。

```javascript
var key = Symbol("unguessable");
var objectWithHiddenValue = {};
objectWithHiddenValue[key] = 42;

console.log("keys in the objectWithHiddenValue", Object.keys);
// result = [], i.e. 沒有keys


console.log("value of the hidden property", objectWithHiddenValue[key]);
// result = 42
```

你會發現我們不能直接讀取值 `42`, 除非透過已宣告的變數, `key`, 去讀取。

在平常的JS程式中, 我們很少會直接用到Symbol。
它們多數會被用在一些底層的代碼, 例如 程式庫 (libraries) & 程式框架 (frameworks)

有興趣可以去這[網頁](https://javascript.info/symbol)了解更多關於Symbol。

----

### 物件 Object ###

物件是以不順序, 鍵值對(key-value pair)來儲存不同的值。

你可以用一個以字串而成的名字 (i.e. 鍵 key / 屬性 property) 而作儲存值(value)的位置。

```javascript
var she = {
    id: 777,
    first: "Carrie",
    last: "Lam",
    specialties: ["Lick CCP", "Betrayal"]
};

console.log(`Her name is ${she.first}.`);
```

----

### 型別 Type ###

我們可以利用`typeof`去找出當前值的型別。

```javascript
typeof 229                      // "number"
typeof "八三一"                  // "string"
typeof true                     // "boolean"
typeof Symbol()                 // "symbol"
typeof { foo: "bar" }           // "object"
typeof undefined                // "undefined"
typeof null                     // "object"     下?
typeof [1,2,3]                  // "object"     下?!
typeof function abc(){}         // "function"   下?!!!
```

你會發現上述某些由`typeof`回傳的結果跟剛才學到的不一樣。

#### `typeof null` -> `"object"` ####

很不幸地, `typeof`對`null`判別為`object`。這是因為...

_[節錄 MDN Web Doc](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/typeof#null)_

> 自從 JavaScript 一開始出現, JavaScript 的值就總以型別標簽跟著一個值的方式表示。物件的型別標簽是 0. 而 null 這個值是使用 NULL 指標 (在大部份平台上是 0x00) 來表示. 因此, null 看起來像是一個以 0 為型別標簽的值, 並使得 typeof 傳回不甚正確的結果.

你只要記住`null`是基本型別, 這一點是不會變的。

##### 分辨 `null` #####

**_問:_** 那我怎樣判別當前值是`null`呢?

**_答:_** 使用 `==` 或 `Object.is`

```javascript
null == null
// true

Object.is(null, null)
// true
```

#### `typeof [1,2,3]` -> `"object"` ####

在文章開始時, 筆者提到 javascript 只有基本型別 (primitive) 及物件型別 (object)。

那 `array` 及 `function` 在javascript是屬於什麼?

其實 `array`, `function` 是 `object` 的亞種, 是屬於`object`的一種。

##### 陣列 Array #####

不同於`object`, `array` 是有次序, 使用數字來標記每一項資料。

```javascript
var arr = [ "a", 123, false ];

arr[0]
// "a"

arr[1]
// 123

arr[2]
// false

arr.length
// 3
```

從上例可看到JS的`array`可以儲存不同型別的資料。

跟很多其他程式語言一樣, JS的`array`是 0-base, 即以 0 作首個位置。

##### 分辨 `array` ######

**_問:_** 那我怎樣判別當前值是`array`呢?

**_答:_** 使用 `Array.isArray`

```javascript
var arr = [ 1, 2, 3 ];

Array.isArray(arr);
// true
```

#### `typeof function abc(){}` -> `"function"` ####

既然函数 (function) 是物件 (object)的一種, 何解 `typeof function` 會回傳 `"function"`?

簡單來說, 這是因為ECMAScript標準給 `typeof` 的定義。

[節錄 ECMA-262](http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.3)

> Object (native or host and does implement [[Call]])

----

## 變數 Variable ##

在JS, 值 (value) 可以直接表示, 或把它放進變數 (variable) 中。
你可以把變數想像成一個放值進去的盒子。

我們可以用 `var`, `let`, `const` 來宣告變數。

例如:

```javascript
var beach = "Carry";
var lam;
```

你可以見到我們可以利用 `var` 去建立變數為稍後程式之用, 而亦可選擇性把值放到變數中。

另一個關鍵字 `let` 也可以做到類似效果。

```javascript
let it = "burn";
let foo;
```

### `var` vs `let` ###

既然利用 `var` 和 `let` 宣告變數會有相似效果, 為何會有兩個不同關鍵字?

`let` 和 `const` 都係於ES6出現, 而用它們來宣告的變數只會在區塊中有效 (block-scoped)。

參考下例:

```javascript
var is_protester = true;

if(is_protester){
    var action = "find them at night";
    let names = [ "Mr. Chow", "Miss Chan" ];
    console.log("It is a secret operation.");
}

console.log(action);
// "find them at night"

console.log(names);
// Oops! Error!
```

當程式嘗試於 `if` 的區塊外讀取變數 `names` 的時侯, 錯誤就會出現。

這正因為變數 `names` 使用 `let` 來宣告, 令到變數 `names` **_只在_** `if` 的區塊內有效。

### `const` ###

第3個關鍵字就是 `const`。 它跟 `let` 一樣: 宣告出來的變數只會在區塊內有效。

但當宣告 `const` 的變數時, 你必需給予起始值, 且宣告出來的變數的值之後是不容改變。

參考下例:

```javascript
let count = 0;
const canDo = true;

if(canDo){
    count += 1;     // OK
    canDo = false;  // Error!
}
```

雖說以 `const` 宣告出來的變數的值是不容改變, 但不代表不可以"更改"。

參考下例:

```javascript
const captions = [ "有險可守" ];

captions[1] = "Over my dead body!";     // OK
captions = [ "Nah" ];                   // Error!
```

如果你要用 `const` 宣告的變數來儲存物件 (object), 需要留心在之後程式會否對該變數進行非預期的更改, _突變 (mutation)_ 。

----
