---
tags: [this, 闭包, 作用域]
---

# 函数

## arguments

-   arguments 是一个类数组对象
-   arguments 和实参间存在绑定关系（无实参传入时不产生）（严格模式下不产生绑定关系）
-   arguments.callee 指向函数本身
-   arguments.length 为实参的数量

## length

-   函数的 length 为形参的数量（箭头函数也适用）
-   通过 length 可实现函数柯里化、重载等

## 什么是方法

-   当函数成为对象的属性时称之为方法。作为方法调用时需要注意 this 的指向。

## 搞清楚 this

-   [this](./scope-context.md#this)

## 箭头函数与普通函数的区别

## 闭包

## 作用域

词法作用域、函数作用域、块作用域

## 箭头函数

-   无 arguments
-   this 锁定
-   不能作为构造函数，没有 new.target，没有 prototype

## 调用栈

## new

## 函数式编程

## 惰性函数

初次调用函数时进行判断，判断后按照环境重置函数引用，去除后续的判断操作。
