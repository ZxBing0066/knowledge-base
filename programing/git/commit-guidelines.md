# commit 规范

## 规范

### Angular commit 规范

https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines

#### Format

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

-   头部信息为必填，头部中 scope 为可选
-   每一行不能超过 100 个字符

#### Type

-   feat: 需求
-   fix: bug 修复
-   docs: 文档
-   style: 不影响语义的代码格式变更（空格，缩进）
-   refactor: 不是需求或 bug 修复的代码变更（重构）
-   perf: 提升性能的变更
-   test: 添加或修改测试用例（测试相关）
-   chore: 构建变更、工具变更等

#### Scope

定义 commit 的变更范围、位置，可使用 `*` 代表多个位置

#### Subject

用来简短的描述变更内容

-   使用命令式现实时语法（change not changed nor changes）
-   首字母不大写
-   尾部不要句号（. 。）

#### Body

包含修改的动机和变更的内容（具体的细节），同样适用命令式现在时

#### Footer

需要包含所有的 `Breaking Changes`，还有 issue 的引用等（使用 close 等来操作 issue 等），其它的想要放在 commit 里的信息也可放在这里

-   `Breaking Changes` 使用 `BREAKING CHANGE:` 标识，后接空格（单行）或两个空行（多行）填写内容

#### Revert

Revert 格式：`revert: This reverts commit <hash>.`

### Conventional Commits

https://www.conventionalcommits.org/en/v1.0.0/

#### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

-   与 Angular commit 规范格式基本一致
-   Conventional Commits 未定义具体的 types 列表（只定义了 feat 和 fix），较为宽泛
-   Conventional Commits 的 BREAKING CHANGE 语法多了一种，除了在 footer 中写明外，也可在 `<type>[optional scope]` 后追加 `!` 来表明为 BREAKING CHANGE
-   footer 中除了 BREAKING CHANGE 同样可以填写其它内容

#### SemVer

规范与 SemVer 相吻合，fix 对应 PATCH，feat 对应 MINOR，而 BREAKING CHANGE 对应 MAJOR，其它 type 对版本无影响

#### Specification

具体规范内容

1.  每个提交都**必须**使用类型字段前缀，它由一个名词构成，诸如 `feat` 或 `fix`，其后接**可选的**范围字段，**可选的** `!`，以及**必要的**冒号（英文半角
    ）和空格。
2.  当一个提交为应用或类库实现了新功能时，**必须**使用 `feat` 类型。
3.  当一个提交为应用修复了 bug 时，**必须**使用 `fix` 类型。
4.  范围字段**可以**跟随在类型字段后面。范围**必须**是一个描述某部分代码的名词，并用圆括号包围，例如： `fix(parser):`
5.  描述字段**必须**直接跟在 <类型>(范围) 前缀的冒号和空格之后。 描述指的是对代码变更的简短总结，例如： _fix: array parsing issue when multiple spaces
    were contained in string_ 。
6.  在简短描述之后，**可以**编写较长的提交正文，为代码变更提供额外的上下文信息。正文**必须**起始于描述字段结束的一个空行后。
7.  提交的正文内容自由编写，并**可以**使用空行分隔不同段落。
8.  在正文结束的一个空行之后，**可以**编写一行或多行脚注。每行脚注都**必须**包含 一个令牌（token），后面紧跟 `:<space>` 或 `<space>#` 作为分隔符，后面
    再紧跟令牌的值（受 [git trailer convention](https://git-scm.com/docs/git-interpret-trailers) 启发）。
9.  脚注的令牌**必须**使用 `-` 作为连字符，比如 `Acked-by` (这样有助于 区分脚注和多行正文)。有一种例外情况就是 `BREAKING CHANGE`，它**可以**被认为是一
    个令牌。
10. 脚注的值**可以**包含空格和换行，值的解析过程**必须**直到下一个脚注的令牌/分隔符出现为止。
11. 破坏性变更**必须**在提交信息中标记出来，要么在 <类型>(范围) 前缀中标记，要么作为脚注的一项。
12. 包含在脚注中时，破坏性变更**必须**包含大写的文本 `BREAKING CHANGE`，后面紧跟着冒号、空格，然后是描述，例如： _BREAKING CHANGE: environment
    variables now take precedence over config files_ 。
13. 包含在 <类型>(范围) 前缀时，破坏性变更**必须**通过把 `!` 直接放在 `:` 前面标记出来。 如果使用了 `!`，那么脚注中**可以**不写 `BREAKING CHANGE:`，同
    时提交信息的描述中**应该**用来描述破坏性变更。
14. 在提交说明中，**可以**使用 `feat` 和 `fix` 之外的类型，比如：_docs: updated ref docs._ 。
15. 工具的实现必须**不区分**大小写地解析构成约定式提交的信息单元，只有 `BREAKING CHANGE` **必须**是大写的。
16. BREAKING-CHANGE 作为脚注的令牌时**必须**是 BREAKING CHANGE 的同义词。

#### Demos

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

#### Revert

规范没有强制定义 revert 的 commit，但是给了推荐

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

#### Why

-   自动化生成 CHANGELOG。
-   基于提交的类型，自动决定语义化的版本变更。
-   向同事、公众与其他利益关系者传达变化的性质。
-   触发构建和部署流程。
-   让人们探索一个更加结构化的提交历史，以便降低对你的项目做出贡献的难度。

## 工具

### Commitizen

使用 Commitizen cli 可以使用表单填写的方式帮助开发者规范 commit

#### 安装

全局/直接使用 npx 调用（？理论上名字和 bin 不一致无法直接调用）

或者安装到项目中

安装后使用 npx cz 启动，全局安装可直接使用 git cz

安装后直接调用会和 git commit 一样，（文档说默认会启用 git-cz adapter，不过尝试了无效果，而且好像有 bug，所有操作都需要触发两次才有效果）需要
Commitizen friendly，就是配置对应的 adapter

推荐安装在本地然后使用 npx cz 执行

#### adapter

如果要使用 angular 规范（conventional-changelog），使用 `commitizen init cz-conventional-changelog --save-dev --save-exact` 来自动化安装，或者直接
`pnpm add cz-conventional-changelog`，然后将下方配置添加到 package.json

```json
"config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
```

也可以通过 `.czrc` 文件配置

```json
{
    "path": "cz-conventional-changelog"
}
```

path 是为了告诉 commitizen adapter 的地址，使用 require.resolve 来解析

其它的 adapter 也是一样安装。

使用较多的 adapter：

-   git-cz
-   cz-conventional-changelog
-   cz-customizable
-   @commitlint/cz-commitlint

commitizen badge

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

### 配合 husky

https://commitizen.github.io/cz-cli/ Optional: Running Commitizen on git commit

参考文档配置 git commit hook

配合新版 husky 现在存在问题，配置后使用 git commit 会在提交结束后进入 git 自带的消息确认页面，可以通过 git commit -m 'a' 来跳过触发，或者直接创建一个
alias，但是添加 hook 之后还存在一个问题，就是如果直接调用 npx cz 会连续启动两次 cz ORZ，目前阶段不建议配合使用

https://github.com/typicode/husky/issues/862

### monorepo

https://github.com/commitizen/cz-cli/issues/782

目前暂不支持

只能自己写脚本解决

npx cz --retry 在某些情况下会很方便，不过存在 bug，提交后需要自行关闭，而且某些情况下提交会卡住

npx cz 没有提交文件也会继续执行，然后执行到最后报错，也算是个 bug

## 校验

### commitlint

`npx commitlint --from HEAD~1 --to HEAD --verbose` 使用 from to 批量校验 commit 信息

自定义配置

https://commitlint.js.org/#/reference-rules

```json
{
    "parserPreset": "conventional-changelog-conventionalcommits",
    "rules": {
        "body-leading-blank": [1, "always"],
        "body-max-line-length": [2, "always", 100],
        "footer-leading-blank": [1, "always"],
        "footer-max-line-length": [2, "always", 100],
        "header-max-length": [2, "always", 100],
        "scope-case": [2, "always", "lower-case"],
        "subject-case": [0],
        "subject-empty": [2, "never"],
        "subject-full-stop": [2, "never", "."],
        "type-case": [2, "always", "lower-case"],
        "type-empty": [2, "never"],
        "type-enum": [2, "always", ["feat", "fix", "docs", "style", "test", "refactor", "chore", "revert"]]
    }
}
```

## changelog

## 发版

## 备注

### Angular commit

https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines

### conventional-changelog

https://github.com/conventional-changelog/conventional-changelog

conventional-changelog：angular 中使用的规范工具

-   conventional-changelog：angular 的 commit 规范定义
-   conventional-changelog-cli：采用 angular commit 规范，自动生成 changelog 的 cli
-   等

### git interpret-trailers

https://git-scm.com/docs/git-interpret-trailers

git 的 commit message 结构化信息

### git-cz

https://github.com/streamich/git-cz

commitizen 的 adapter

-   支持自定义配置
-   支持 emoji
-   支持非交互模式
-   在

### cz-conventional-changelog

https://github.com/commitizen/cz-conventional-changelog

commitizen 的 conventional-changelog 规范 adapter

-   支持自定义配置

### cz-customizable

https://github.com/leoforfree/cz-customizable

commitizen 的强自定义 adapter，支持定义一些细节规范

### semantic-release

https://github.com/semantic-release/semantic-release

自动版本管理，发版工具

### standard-version

https://github.com/conventional-changelog/standard-version

自动版本管理，changelog 生成工具

### husky

https://github.com/typicode/husky

git pre-commit hooks 工具

### commitlint

https://github.com/conventional-changelog/commitlint

commit 信息校验工具

### @commitlint/prompt-cli

提供的类似 commitizen 工具，但是较为简陋
