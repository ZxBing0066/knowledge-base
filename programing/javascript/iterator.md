# 迭代器

存在 [Symbol.iterator] 属性的可以使用 for of 进行迭代

-   Array
-   Set
-   Map
-   String

iterator 为一个对象，包含 next 方法：

```js
function createIterator(items) {
    var i = 0;
    return {
        next: function () {
            var done = i >= item.length;
            var value = !done ? items[i++] : undefined;

            return {
                done: done,
                value: value
            };
        }
    };
}
```

next 方法返回值为 value 和 done

数组、Map、Set 存在三种迭代器：entries、keys、values。entries 每一个迭代项为一个数组，数组第一项为 key、第二项为 value
