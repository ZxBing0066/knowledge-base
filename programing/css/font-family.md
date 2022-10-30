---
tags: [基础]
---

# 字体

-   一个属性值中可以指定多个字体，会按照从前往后的顺序依次匹配
-   多字体是需要注意字体名如果有特殊符号时需要使用引号包裹

## 通用字体

非指定字体，而是指定一种字体定义，浏览器会按照计算机实际安装字体来决定展示的字体。一般用于放在字体定义的最后作为回滚选项
。

常见的如：

-   serif 衬线字体
-   sans-serif 无衬线字体
-   monospace 等宽字体
-   cursive 草书

## 自定义字体

```css
@font-face {
    font-family: 'Open Sans';
    src: url('/fonts/OpenSans-Regular-webfont.woff2') format('woff2'), url('/fonts/OpenSans-Regular-webfont.woff')
            format('woff');
}
```

### 控制自定义字体下载中状态显示

-   auto
-   block
-   swap
-   fallback
-   optional

-   https://css-tricks.com/almanac/properties/f/font-display/
-   https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display
