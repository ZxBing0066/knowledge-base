# 文档对象模型 - Document Object Model（DOM）

指通过脚本更新操作文档内容、样式、结构的一系列 API，如 document.querySelector 的返回值等。

## 选择器

## 创建 DOM

## 属性

## 增

## 删

## 改

## 查

## 几何形状

## 慢

主要由于：

-   通信消耗，js 引擎和渲染引擎通信
-   渲染单线程，操作需等待

dom 本身只是数据，操作很快，但是渲染引擎进行渲染时要进行大量的布局、绘制计算，比较慢
