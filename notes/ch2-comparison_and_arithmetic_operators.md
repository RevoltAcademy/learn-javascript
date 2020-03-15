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

是不是很淺白, 很易懂? 少年, 你還太年輕了。

當我們將 `object` 進行嚴格相等的比較時, 奇怪的事就會出現...

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

原來當

----

## 算術運算子 (Arithmetic Operators) ##

### 基本算術運算子 ###

### 特別算術運算子 ###
