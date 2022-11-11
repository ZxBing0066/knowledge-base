# 数据类型

## 值类型/原始类型/非引用类型

-   number
-   bigint
-   string
-   boolean
-   symbol
-   null
-   undefined

### bigint [^1]

-   用于解决大数计算的问题
-   只能是整数
-   不能使用 Math 的内置方法计算
-   不能 number 混合计算
-   不能 new
-   转换为数字时可能导致精度丢失
-   字面量为数值+n：`1n`,`1111n`
-   0n !== 0 0n == 0

### symbol [^2]

-   一种特殊的字符串，用作唯一标识
-   常被用来给对象增加属性防止属性冲突
-   用作属性值无法被枚举（Object.keys, for in, Object.getOwnPropertyNames）
-   不能 new
-   用作属性可使用 Object.getOwnPropertySymbols 进行获取

### number

-   存在数值溢出问题、计算精度问题。
-   计算精度可使用整数转换来解决
-   数值溢出可使用 bigint 解决

进制转换：(number).toString(进制)

IEEE 754 双精度浮点数。

#### 全局 Symbol

-   Symbol.for(string) 可以在全局的 Symbol 中注册一个全局 Symbol，该 Symbol 在再次调用 Symbol.for(string) 时会返回。
-   Symbol.keyFor(symbol) 可以获取全局 Symbol 的 key。

#### 通用 Symbol

-   Symbol.hasInstance - 自定义 instanceof 行为
-   Symbol.iterator - 自定义迭代器行为，for-of 调用
-   Symbol.asyncIterator - 自定义 async 迭代器行为，for-await-of 调用
-   Symbol.toPrimitive - 自定义对象的原始类型转换行为
-   Symbol.toStringTag - 自定义对象的 toString 行为，Object.prototype.toString 调用

## 引用类型/复杂类型

新手要注意多变量指向同一个引用，当引用中的属性变更时会影响所有变量。

### function

#### new [^5]

new 执行以下几步操作：

-   首先创建一个空对象
-   设置空对象的原型，如果构造函数的 prototype 为对象则设置为它，否则维持不变
-   执行构造函数，并将创建对象作为 this 上下文
-   构造函数执行完成后如果返回了一个非原始值，将会使用该值作为创建的实例，否则使用创建的对象作为返回值

### 原型链 [^4]

![picture 4](/img/data-type-396ff30079696759bc2bff5497ffa24b919813b09c9da6ab55f4b024f1938b4f.png)

JS 原型继承的特点：

-   继承属性不可删改，可读，修改时会在自身创建
-   继承属性可以被 for in 迭代，需要使用 hasOwnProperty 判断（顶层 Object 原型上的属性基本均为 enumerable false，不可枚举，所以不会被 for in 所枚举）

-   原型继承呈现链状，所以称为原型链

-   几乎所有对象原型链的顶端都为 Object 函数的 prototype，除了 Object.create(null);
-   对象字面量的原型为 Object 函数的 prototype
-   Object.prototype 的原型为 null
-   可以通过 Object.getPrototypeOf 获取对象/包装对象的原型

-   Object.constructor 为 Function
-   Function.prototype 的 prototype 为 Object.prototype
-   Object.prototype.constructor 为 Object
-   Function.constructor 为 Function => Function instanceof Function
-   Object.getPrototypeOf(Object.getPrototypeOf(Object)).constructor 为 Object => Object instance Object
-   Function instanceof Object, Object instanceof Function

```js
Object.create(null).toString();
// error
```

## 包装类型

所有基础类型的属性访问都通过包装类型来实现。

```js
'aaa'.length;
const s = 'string';
s.length = 4;
s._a = 1;
```

## 类型转换

### 隐式类型转换

### 显式类型转换

## 堆存储和栈存储

## 隐式类型循环引用导致的内存泄露

## 值传递和引用传递

## 类型判断

### instanceof

一般用于判断是否为对应类型的实例，本质是检查右值 prototype 是否在左值的原型鲢上。基本类型的

-   Object instanceof Object
-   Function instanceof Function
-   Object instanceof Function
-   Function instanceof Object

通过 Symbol.hasInstance 自定义 instanceof 行为：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance

> es 标准定义：https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-instanceofoperator >
> https://stackoverflow.com/questions/23622695/why-in-javascript-both-object-instanceof-function-and-function-instanceof-obj

### typeof

| 类型      | typeof 返回值 |
| --------- | ------------- |
| null      | object        |
| undefined | undefined     |
| boolean   | boolean       |
| number    | number        |
| bigint    | bigint        |
| string    | string        |
| symbol    | symbol        |
| function  | function      |
| class     | function      |
| object    | object        |
| array     | object        |
| 其它      | object        |

#### `typeof null === 'Object'` 的原因：

在早期的 JS 中，JS 中的值使用类型标识+值来表示，object 的类型标识为 0，typeof 使用类型标识来判断类型。 而 null 使用空指针实现，大部分环境下空指针指向
`0x00`，导致 null 的类型标识为 0，而后期由于存量的页面导致无法变更。所以只是一个无法修复的历史 bug。

> 参考链接：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

### 其它

使用 Object toString 获取类型

```ts
function getType(v: any) {
    return {}.toString.call(v).replace('[object ', '').replace(']', '');
}
```

! 注意遇到基本类型的对象实例会翻车：

```js
getType(new String(''));
// String
```

Array.isArray 判断数组

Number.isNaN 判断 NaN

### 常规方案

1. 通过 === null 和 === undefined 判断出两个特殊类型
2. 通过 typeof 判断出其它基本类型
3. 通过 Object toString 判断出复杂类型

[^1]: [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
[^2]: [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols)
[^3]: [继承与原型链](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
[^4]: [JS Object Layout](http://mollypages.org/tutorials/js.mp)
[^5]: [new 操作符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new#description)
[^6]: [Event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)