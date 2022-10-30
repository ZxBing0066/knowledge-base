# markdown 扩展语法

部分少见的 markdown 语法记录（部分 markdown 引擎可能会不支持）。

## Table 对齐

```md
| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |
```

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |

## 脚注

```md
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote. 脚注会被自动解析到页面底部
[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

## 标题 ID

```md
### My Great Heading {#custom-id}
```

### 带自定义 ID 的标题 {#custom-id}

通过链接跳转 [跳到指定的标题](#custom-id)

大部分引擎会为 md 标题生成标题名 id。

## 定义表

```md
First Term : This is the definition of the first term.

Second Term : This is one definition of the second term. : This is another definition of the second term.
```

```html
<dl>
    <dt>First Term</dt>
    <dd>This is the definition of the first term.</dd>
    <dt>Second Term</dt>
    <dd>This is one definition of the second term.</dd>
    <dd>This is another definition of the second term.</dd>
</dl>
```

emm，这个引擎好像不支持，无法预览

## 下标

```md
H~2~O
```

H~2~O

好吧 不支持

## 上标

```md
X^2^
```

X^2^

好吧 不支持

## 高亮

```md
I need to highlight these ==very important words==.
```

I need to highlight these ==very important words==.

好吧 不支持

> 参考地址： https://www.markdownguide.org/extended-syntax/
