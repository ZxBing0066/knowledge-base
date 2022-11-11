# CSS - 层叠样式表

全称 cascading style sheet，层叠样式表。

## 盒模型 [^1]

![picture 3](/img/box-model-68d7f077ea315054ee7680248d7926d9a592cb75d7934d0a03b3c83769456727.png)

-   内容区、padding、border、margin
-   怪异盒模型/IE 盒模型与标准盒模型的区别
    -   标准盒模型 content-box - width 计算范围为 content 区
    -   IE 盒模型 border-box - width 计算范围为 content+padding+border
-   box-sizing 切换盒模型
-   块盒子和内联盒子区别
    -   内联盒子
        -   宽高被忽略
        -   margin、padding、border 生效
        -   不会撑开盒子的实际占用大小，影响外部布局
-   内部显示类型和外部显示类型
-   margin 折叠 - 垂直边距

## 层叠规则

按照重要程度、优先级、顺序依次判断

### 重要程度

-   用户代理（UA）样式表(如浏览器的默认样式)
-   用户样式表中的常规声明
-   网站样式表中的常规声明
-   网站样式表中的!important 声明
-   用户样式表中的!important 声明

### 优先级

-   行内样式
-   id 选择器
-   class 选择器、属性选择器、伪类
-   元素、伪元素选择器
-   通用选择器、组合符/连接符、否定伪类 :not 不参与计算

注意优先级计算为跨层级计算，同层级比对权重值，不同层级直接比较级别高低

### 顺序

-   后来居上

## 重绘和重排

-   重排：元素的几何尺寸、位置等信息发生了变化，渲染引擎需要重新计算元素位置，并且会影响到其它元素的位置
-   重绘：元素的颜色等信息的重新绘制，消耗相比小很多

优化手段：

-   集中修改样式，可以让渲染引擎合并操作
-   集中修改 dom 结构，利用 fragment 作为临时容器
-   不要一边修改一边读取 dom/样式，读取会让渲染引擎强制进行渲染再返回新的样式信息
-   使用 transform、opacity、will-change 等生成独立图层，开启 GPU 加速。[^3]
-   让元素脱离常规流

GPU 加速会导致滥用会导致内存消耗变大，还有字体模糊等问题

## 常规流/文本流 [^2]

常规流（normal flow，常被翻译为文档流）

-   float 脱离常规流，不脱离文本流，其它元素会忽略它的尺寸占位，但是文本会进行环绕
-   absolute、fixed，脱离常规流，脱离文本流

## 参考资料

[^1]: [MDN 盒模型](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
[^2]: [W3C 常规流](https://www.w3.org/TR/css-position-3/#comparison)
[^3]: [MDN CSS 触发 GPU 加速](https://developer.mozilla.org/en-US/docs/Learn/Performance/CSS#animating_on_the_gpu)
