# 数据类型

## 基本类型

-   number
-   bigint
-   string
-   boolean
-   symbol
-   null
-   undefined

## 引用类型

新手要注意多变量指向同一个引用，当引用中的属性变更时会影响所有变量。

## 包装类型

所有基础类型的属性都通过包装类型来实现。

## 类型转换

### 隐式类型转换

### 显式类型转换

## 堆存储和栈存储

## 隐式类型循环引用导致的内存泄露

## 值传递和引用传递

## 类型判断

### instanceof

一般用于判断是否为对应类型的实例

-   Object instanceof Object
-   Function instanceof Function
-   Object instanceof Function
-   Function instanceof Object

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

在早期的 JS 中，JS 中的值使用类型标识+值来表示，object 的类型标识为 0，typeof 使用类型标识来判断类型。 而 null 使用空指
针实现，大部分环境下空指针指向 `0x00`，导致 null 的类型标识为 0，而后期由于存量的页面导致无法变更。所以只是一个无法修复
的历史 bug。

> 参考链接：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

### 其它

使用 Object toString 获取类型

```ts
function getType(v: any) {
    return {}.toString.call(v).replace('[Object ', '').replace(']', '');
}
```

Array.isArray 判断数组

Number.isNaN 判断 NaN
