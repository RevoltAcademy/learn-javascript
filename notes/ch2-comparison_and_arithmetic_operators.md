# 比較 & 算術運算子 #

## 比較 (Comparison) ##

在寫程式時, 我們經常需要把兩個變數比較, 看看它們是否相等。

我們可能會直觀地認為 _相等_ 只是比較值的相等,
但JS對 _相等_ 的定義是較複雜的。

_相等_ 與 _等值_ 是有少許差別。

### 嚴格相等 (===) ###

`===` 是嚴格相等, 或稱作三等於, 全等。

觀看下例。

```javascript
30000 === 30000.0;              // true
"thanks" === "thanks";          // true
null === null;                  // true
undefined === undefined;        // true
false === false;                // true

777 === "777";                  // false
"Wear mask" === "100% secure";  // false
true === 1;                     // false
0 === null;                     // false
"" === null;                    // false
null === undefined;             // false
```

是不是很淺白, 很易懂?

但很可惜, 當我們將 _非基本型別_ 進行嚴格相等的比較時, 事情就會變得複雜。

```javascript
// Array
const a = [721, "唔見人", 831, "打死人"];
const b = a;

a === b;                                       // true
a === [721, "唔見人", 831, "打死人"];            // false
b === [721, "唔見人", 831, "打死人"];            // false

// Object
const c = { 101: "槍殺人", 1111: "狂殺人" };
const d = c;
c === d;                                       // true
c === { 101: "槍殺人", 1111: "狂殺人" };         // false
d === { 101: "槍殺人", 1111: "狂殺人" };         // false
```

當把基本值 (primitive value) 比較時, 不難想像, `===` 會把基本型別的值比較,
e.g. `777 === 777`。

但當比較物件 (object) 時, JS 不會直接把物件值進行比較,
而是將代表 **物件值的參數 (reference)** 來進行比較。

在JS中, 所有物件值 (object values) 都是用參數的形式來儲存 (held by reference)。

而把物件值賦予給變數 (assign object value to variable), 或把 "擁有物件值" 的變數 (variable) 賦予另一變數,

也只不過是把代表物件值的參數拷貝到變數中 (pass by refernece-copy)。

請看下例。

```javascript
var 芝麻仁 = { 居住地: "香港" };
```

宣告變數 `芝麻仁` 時, 代表 `{ 居住地: "香港" }` 的參數 (reference) 被賦到 `中國人` 中。

```javascript
var 娜娜 = 芝麻仁;
```

宣告變數 `娜娜` 時, 儲存於 `芝麻仁` 的參數就會被拷貝到 `娜娜` 中。

```javascript
var 香港人 = { 居住地: "香港" };

娜娜 === 芝麻仁;    // true
芝麻仁 === 香港人;  // false
```

第一個嚴格相等比較中, 因為變數 `娜娜` 與 變數 `芝麻仁` 都是擁有相同參數 (reference), 所以會得出 `true`。

第二個嚴格相等比較中, 雖然 `香港人` 的屬性 (property), `居住地` 也是 `香港`,

但代表 `{ 居住地: "香港" }` 的參數已經與剛才宣告變數 `芝麻仁` 的時侯不同 (different object references but same content)。

所以會得出 `香港人` 不相等於 `芝麻仁` , 即 `false` 。

| 例外: |
| :----- |
| 但在使用 `===` 的時侯, 你可能會遇到有些非預期的比較結果。 |

```javascript
NaN === NaN // false
0 === -0    // true
```

由上例可看到, `===` 的判辨方法並不是 _等值算法 (Same Value Algorithm)_,

所以 `===` 會"騙"你 `NaN === NaN` 是 `true`, `0 === -0` 是 `false` 。

那怎麼辦?

要判別 `NaN`, 我們可以使用 `Number.isNaN` 來處理:

```javascript
Number.isNaN(NaN)   // true
```

要判別 `0` 與 `-0` 時, 我們可以使用 `Object.is`:

```javascript
Object.is(0, -0)    // false
```

如果有興趣知道完整 **嚴格相等 `===`** 的算法, 可以去查看 [The Strict Equality Comparison Algorithm](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6)。

| 題外話 |
| :---- |
| `Object.is` 的算法跟 `===` 或 `==` 不同, 是用了 [等值算法 (Same Value Algorithm)](https://www.ecma-international.org/ecma-262/5.1/#sec-9.12)。 |

### 強制比較 (Coercive Comparison) ###

在JS中, 你可能會對下例結果感到好奇:

```javascript
777 == "777"    // true
777 > "689"     // true
"a" < "b"       // true
1 < "b"         // false
[] == ![]       // true
2 == [2]        // true
true == 1       // true
```

<!-- The Abstract Equality Comparison Algorithm https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3 -->

#### 相等 ( `==` ) ####

#### 小過 / 小過或等於 ( `<`, `<=` ) ####

#### 大過 / 大過或等於 ( `>`, `>=` ) ####

----

## 算術運算子 (Arithmetic Operators) ##

### 基本算術運算子 ###

### 特別算術運算子 ###
