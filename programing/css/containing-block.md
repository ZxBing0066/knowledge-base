---
tags: [深入]
---

# 包含块 容器盒 containing block

-   知晓包含块对元素的影响
    -   影响部分百分比值的计算：width height padding margin 以及偏移量 top left 等
        -   height, top, bottom 按照包含块高度计算
        -   其它按照包含块的宽度计算，包括 margin-top 等上下方向的值
    -   定位的基准位置
-   如何确认元素的包含块 - 包含块主要受 position 的影响
    -   static, relative, stick 元素的包含块为最近的祖先块元素的内容区或形成的格式化上下文
    -   absolute 元素的包含块为最近的非 static 定位的祖先元素 padding 区
    -   fixed 元素的包含块为一般为 viewport css 中区分多页媒体和连续媒体，除屏幕外还有打印机等设备
    -   absolute、fixed 向上定位包含块时遇到以下元素会被拦截
        -   元素包含非空的 transform、perspective、filter、backdrop-filter 或 contain 为 paint 时
        -   元素的 will-change 包含 transform、perspective （Firefox 下还包括 filter）

## 参考

-   https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block
