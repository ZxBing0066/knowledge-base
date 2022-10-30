# 层叠上下文

-   PK 规则
    -   z-index 用来在同一个层叠上下文下 PK
    -   PK 过程为从上至下
-   层叠上下文生产
    -   根元素存在根层叠上下文
    -   z-index 不为 auto 时
        -   position 为 absolute、relative
        -   flex 的子元素、grid 的子元素
    -   position 为 fixed、sticky
    -   opacity 非 1
    -   以下属性非 none
        -   transform
        -   filter
        -   backdrop-filter
        -   perspective
        -   clip-path
        -   mask / mask-image / mask-border
    -   mix-blend-mode 非 normal
    -   will-change 声明了以上会产品层叠上下文的属性
    -   部分 contain 属性
-   部分属性会生产层叠上下文
    -   display flex、inline-flex
-   Stacking Order 同 order 按照后来居上
    -   层叠上下文的背景和边框
    -   z-index 小于 0
    -   后代中无定位的块元素
    -   浮动元素
    -   后代中无定位的行内元素
    -   有定位的元素

## 参考资料

-   https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index
-   https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index​
-   https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float​
