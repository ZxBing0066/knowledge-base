# 异步编程

## 回调

回调陷阱

## Promise

异步编程的春天

## generator

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

```js
function* generator(i) {
    yield i;
    yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20
```

执行后返回一个类似迭代器的 generator，通过调用 next 不断向后执行

## async-await

终极方案

-   await 必须在 async 函数中
-   top level await 只有少数环境支持

通过 generator 实现
