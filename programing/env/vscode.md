# vscode

-   插件
    -   ai
        -   github codepilot
        -   code-clippy
        -   tabnine


## use snippets

@tag 代码片段，自动补全，user snippet，custom

输入命令 `configure user snippets`，选择 snippet 的应用范围，会在对应范围的配置文件夹中创建 code-snippets 文件

-   内容为一个 json 对象
-   对象 key 会在自动补全时作为提示信息
-   scope 为作用范围，一般为影响的语言列表，不限定范围直接删除该属性即可
-   prefix 为补全前缀，在对应 scope 下输入前缀触发补全（只输入一部分也会补全）
-   body 为补全内容，支持一部分变量，如 `$LINE_COMMENT` 为对应语言的行注释，`$n` 代表自动补全后的光标位置，按照 n 排序，
    补全后按 tab 向后切换光标
-   description 为改片段的描述，自动补全时出现在列表后提示

```jsonc
{
    "add z comment": {
        "scope": ["javascript"],
        "prefix": ["z"],
        "body": ["$LINE_COMMENT @z $1"],
        "description": "add a z comment"
    }
}
```
