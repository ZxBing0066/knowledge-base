---
tags: [基础, 有坑]
---

# 语法

![picture 1](/img/grammer-acb001fa49d9b485e47dc6b93c40b46dd2c3bd63d5f27ee5fa65bef12aa0e256.png)

## 基础的语法

-   属性
-   注释

## 闭合 ❗️

注意不同标签的闭合方式

-   `<a></a>`
-   `<img />`
-   `<br>`

## 嵌套 ❗️

-   要清楚那些标签能嵌套，能够被嵌套的有哪些。
-   如 p 中不可嵌套 div，写错会产生一些难以察觉的 bug，不过一般 console 中会有对应的提示信息。

## 注意

:::danger HTML 非严格强兼容带来的问题

需要注意现在常用的 HTML 标准模式本身是不严格的，忘记闭合等可能会导致层级错误，之前有遇到过同学忘记闭合 video 标签导致后续的 p 标签消失的情况。

:::
