# 函数式编程

## 特点

-   强调过程封装
-   不修改状态
-   同输入-同输出，无副作用

## 函数式语言定义

没有通用的定义，函数式编程语言应该是促进创造和使用函数的。

## 函数是一等公民

函数可以作为值去到任何值可以去的地方。

## 高阶函数

-   以一个函数为参数
-   返回值为一个函数

## Applicative 编程

Applicative 编程定义为函数 A 作为参数提供给函数 B

## 函数柯里化

将函数拆解为多个 n 元函数，分次传入参数。

## 偏函数

通过固定函数的一部分参数，生成一个更小元的函数。

## 函数组合

当需要使用函数组合完成某些操作时，需要不停嵌套函数，此时可以通过函数组合来简化操作。

## 函数缓存

函数式编程：同输入-同输出，可将输入输出进行映射缓存，当遇到已计算的输入时，可直接返回缓存内容。
