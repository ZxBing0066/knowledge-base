# 值传递和引用传递

-   早期的 JS 中只有按值传递，ES6 modules 出现后 JS 中出现了第一个按引用传值的场景。
-   值传递指的是当将变量赋值给另一个变量时或者复制到函数形参中执行时，会将变量中的值复制到新变量/参数中。
-   引用传递值得时传值时不是复制值，而是直接将变量的引用传递过去，一般即直接将变量的内存地址进行传递
-   注意值传递和引用传递与引用类型/非引用类型间没有关联性，不要搞混

使用 demo 说明：

```js title=值传递
const a = 1;
const b = a;
b = 2;
console.log(a);
// 1，b 中的值从 a 复制，所以 b 的修改与 a 无关。
```

```js title=引用传递
const a = 1;
const b = a;
b = 2;
console.log(a);
// 2，b 和 a 指向同一个内存地址，所以 b 的修改会影响到 a。
```

## JS 中的引用传递

JS 中 es6 的 import 为引用传递：

```js title=module.js
export let a = 1;

console.log(a);

setInterval(() => {
    console.log(a);
}, 1000);
```

```js title=usage.js
import { a } from './module.js';

a = 2;
```

会发现，当 usage.js 引入 a 并对其赋值后，后续在 module.js 中的打印值就变成了 2。
