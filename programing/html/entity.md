---
tags: [基础]
---

# 实体字符

-   由于一些特殊字符在 HTML 中存在特殊含义（或是被用作预留字符），所以当需要将其作为文本展示时就需要借助实体字符。如 `<` 会被解析成 html 标签的一部分
    。
-   还有如空格会被 html 忽略缩减成一个，此时也可以通过实体字符来解决。
-   也可被用来解决一些 XSS 注入问题。

常见和常用的实体字符：

| 字符 | 描述   | 实体字符编码 | 实体编号 |
| ---- | ------ | ------------ | -------- |
| ` `  | 空格   | `&nbsp;`     | `&#160;` |
| `<`  | 小于号 | `&lt;`       | `&#60;`  |
| `>`  | 大于号 | `&gt;`       | `&#62;`  |
| `&`  | 和号   | `&amp;`      | `&#38;`  |
| `"`  | 引号   | `&quot;`     | `&#34;`  |

## 参考资料

-   官方列表：https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references
