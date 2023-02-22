# 冷门的知识

## letter-spacing 清除

使用 text-indent 给首字母添加缩进

## 文字布局方向

writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr | lr-tb | tb-rl

-   horizontal-tb：水平方向自上而下的书写方式。即 left-right-top-bottom
-   vertical-rl：垂直方向自右而左的书写方式。即 top-bottom-right-left
-   vertical-lr：垂直方向内内容从上到下，水平方向从左到右
-   sideways-rl：内容垂直方向从上到下排列
-   sideways-lr：内容垂直方向从下到上排列
-   lr-tb：左-右，上-下。对象中的内容在水平方向上从左向右流入，后一行在前一行的下面。 所有的字形都是竖直向上的。这种布局
    是罗马语系使用的（IE）
-   tb-rl：上-下，右-左。对象中的内容在垂直方向上从上向下流入，自右向左。后一竖行在前一竖行的左面。全角字符是竖直向上的
    ，半角字符如拉丁字母或片假名顺时针旋转 90 度。这种布局是东亚语系通常使用的（IE）

## font-display

https://css-tricks.com/almanac/properties/f/font-display/

-   block: 不显示直到字体下载成功后替换
-   swap: 直接显示占位，然后等待字体下载成功后替换
-   fallback: 会不显示大概 100ms，如果还没下载完成就显示占位，大概 3s 还没下载完成则不会替换

## transform

inline 元素行为和文本相同，block 元素行为和容器相同，动画、特效等无法作用于文本，只能作用于容器
