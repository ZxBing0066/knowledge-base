# 格式上下文 - FC

## BFC Block formatting contexts [^1]

### 如何创建 BFC

-   根元素默认为 BFC
-   display 为 inline-block、table-cell、flow-root、flex、inline-flex
-   position 为 absolute、fixed
-   overflow 非 visible（除非该值扩散到 viewport https://www.w3.org/TR/CSS2/visuren.html#block-formatting，见下方特例）
-   float 非 none

### BFC 的特性

-   同一个 BFC 中的元素互相影响
-   不同 BFC 中的元素不会互相影响
-   隔离子元素和外部之间的影响，常用作避免 margin 合并、清除浮动、修复高度塌陷等
-   浮动盒不会叠加到 BFC 上

### 用于解决的问题

-   解决浮动高度塌陷
-   使用浮动制作多栏布局
-   解决 margin 重叠

### 特例

body 使用 overflow 不会创建 BFC [^2]

-   原因
    -   ｜ overflow 的特例
    -   ｜ root 元素 overflow 为 visible 时，body 作为子元素，UA 会将 body 的 overflow 用于 viewport
    -   ｜ viewport overflow 强制为 visible
    -   ｜ ​viewport overflow 扩散到 body，body 的 overflow 变为 visible
    -   ｜ BFC 创建失败
-   解决
    -   使用其它属性创建 bfc
    -   在 html 上设置 overflow 避免 body overflow 扩散到 viewport

## IFC Inline formatting contexts https://drafts.csswg.org/css2/#inline-formatting

-   上下高度、padding、margin 等不会对布局造成影响

## FFC

## GFC

[^1]: [BFC](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)
[^2]: [body overflow 不生成 BFC](https://www.w3.org/TR/2011/REC-CSS2-20110607/visufx.html#overflow)
