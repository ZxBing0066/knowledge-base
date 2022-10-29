# 标签/元素

## 注意：

-   ​ 非标准元素(如 xxx)浏览器不会报错，会作为 HTMLUnknownElement
-   ​ 自定义元素（如 x-xxx）会作为 HTMLElement
-   名称带有 - 的元素将会被视为自定义元素，其余未定义的被视为非标准元素

## html

-   lang 页面语言设置
-   xmlns 指定 xml 命名空间

## head

-   title 控制页面标题，浏览器展示在页面 tab icon 后
-   meta
    -   charset 页面的编码设置
    -   http-equiv 可用于定义安全策略、文档 MIME、自动刷新等
    -   description seo 描述
    -   keywords seo 关键字，由于被滥用已被弃用
    -   link
        -   css file 可配合 media 实现媒体查询
        -   favicon 收藏图标、浏览器标签图标
        -   preload, preconnect, prefetch, dns-prefetch 资源预加载，连接预处理等
        -   web app 图标 定义将 web app 添加到桌面的图标等
        -   base
            -   href 控制相对路径基准地址
            -   target 修改没有指定 target 的链接等标签的默认的 target
        -   style
        -   script

## 表单

### 表单元素

-   input
    -   type 类型
        -   text 文本
        -   number 数字
        -   range 滑动条选择数字
        -   password 密码
        -   checkbox 多选框
        -   radio 单选框
        -   color 颜色选择器
        -   date, time 等 时间，日期选择器
        -   file 文件选择器
            -   accept⚠️ 匹配文件 mime 类型，限制选择。 但是用户选择时是可以自行控制的，所以只能算作推荐文件类型
            -   multiple 是否可多选
            -   capture 控制语音、图片、视频的采集方式
            -   扩展 可通过 js 获取 onChange 后的文件信息，强制控制接收的文件类型、大小、数量等
        -   hidden 隐藏输入框，一般用于早期表单提交中埋入某些不可编辑的隐藏字段（用户 id 等）
        -   email 邮箱
        -   search 搜索
        -   url 链接地址
        -   tel 电话，手机
        -   button, reset, submit 几种按钮，同 button，和 button 的区别：button 中可嵌入各种元素：图片等，但 input
            button 只能使用 value 展示文字类信息
-   textarea 文本域
-   button 包含三种按钮：
    -   ​reset 可点击后清空表单
    -   ​submit 点击后会触发表单提交
    -   ​button 为普通按钮
-   select, option, optgroup 选择框
-   datalist 支持自动补全的输入框
-   fieldset, legend 将表单项进行分组
-   label 绑定表单项，可实现点击聚焦该项、并有利无障碍访问
-   form 表单容器
-   output

### 校验

-   name 在表单中的字段名
-   required 是否必填
-   pattern 使用正则校验
-   maxlength, minlength, max, min 等 使用自带校验、限制属性

### 其它属性/行为

-   disabled 禁用
-   placeholder 占位，为空时展示
-   autocomplete 控制浏览器自动填写行为，可关闭或指定自动填充类型：address、new-password 等
-   input 回车触发提交 ⚠️
-   submit 按钮触发提交 ⚠️
-   阻止默认提交行为 ⚠️ 目前大部分表单均使用 js 提交，需要组织表单的默认行为并拿到数据后使用 js 发送请求，否则默认行为会
    导致页面提交、刷新

## 表格

### 标签

-   table ｜ 表格容器
-   thead ｜ 表头，标题列
-   tbody ｜ 表体
-   tfoot ｜ 表脚，一般用作统计等数据列
-   tr ｜ 表行
-   th ｜ 表头格
-   td ｜ 数据格
-   caption ｜ 标题
-   colgroup, col ｜ 用作定义表列的宽度｜ 可通过定义 col 的宽度定义该列的宽度，如果 table-layout 为 fixed 时，宽度将为固
    定值，否则将作为权重值，按照 table 的宽度分配给 col

### 属性

-   colspan ｜ 定义数据格占几列，用作数据格合并
-   rowspan ｜ 定义数据格占几行，用作数据格合并

### 关注 🧐

-   大型表格的性能优化｜ #虚拟列表 #事件委托
-   固定列｜ 使用 css sticky 可以方便的实现表格列的固定，需要注意配合 table-layout fixed 使用，否则表列宽度会变化

## 多媒体

### video🧑🏻‍💻 视频

-   poster ｜ 海报，视频预览图
-   preload ｜ 预加载
-   source ｜ 配合 source 可让浏览器选择兼容的视频格式
-   loop autoplay controls muted ｜ 循环播放 自动播放 显示控件 静音
-   视频截图 🧐
-   图像处理 🧐

### audio🧑🏻‍💻 音频

-   preload ｜ 预加载
-   source ｜ 配合 source 可让浏览器选择兼容的视频格式
-   loop autoplay controls muted ｜ 循环播放 自动播放 显示控件 静音

### img/picture 图片

-   srcset ｜ 按照屏幕加载不同图片
-   sizes ｜ 按照屏幕信息控制图片宽度
-   media ｜ 媒体查询
-   alt ｜ 错误时会展示出来
-   onload, onfail ｜ 加载，错误处理
-   加载占位 🧐
-   错误占位 🧐
-   懒加载 🧐

### source

### track 使用 track 可展示字幕、标题等

## 特殊

-   noscript ｜ 不支持脚本时的兼容展示
-   canvas🧑🏻‍💻 ｜ 画布 canvas
-   embed/object param🫥 ｜ 嵌入内容｜ 可嵌入各种内容，浏览器会使用插件等展示内容，可用于视频、pdf 等展示｜ embed 和
    object 区别：embed 为 H5 标准，object 较旧，推荐使用 embed
-   style ｜ 嵌入 css - media ｜ 可使用该标签实现媒体查询
-   script ｜ 嵌入 js - src ｜ 载入远程脚本文件 - type - 默认 ｜ 可嵌入 js 脚本 - module🔥 ｜ 原生的 js module 支持 -
    other ｜ 可用作数据块，不会执行。比如用作嵌入模版等 - async⚠️ ｜ 脚本会同步下载（现代浏览器其实都会预先加载脚本），
    并在下载后立即执行，不会遵循顺序执行 ｜ - defer⚠️ ｜ 脚本会等到页面解析完成后并在 DOMContentLoaded 事件触发前执行 -
    nomodule ｜ 在浏览器不支持 es module 时执行，一般用作 module 类型脚本回退兼容
-   iframe🧑🏻‍💻 ｜ 可在页面中嵌入其它页面 - allow ｜ 功能配置，是否支持摄像头、定位等 - sandbox ｜ 沙盒配置，是否支持下载、
    指纹、弹窗等 - 通信 🧐 - 直接调用全局变量 ｜ 仅限于同域情况下 - postMessage ｜ 通过 postMessage 通信，通过
    targetOrigin 解决安全隐患 - url change ｜ 修改 iframe 的 hash 值，然后在 iframe 中定时监听 hash 的变化 - 安全检查 ⚠️
    ｜ 检查上层页面是否允许嵌套本页面，避免安全隐患
-   template ｜ 用于存储 html 片段，方便复用｜
-   slot ｜ 配合 template 使用，从而将元素插入 template 内部

## 常用标签

-   h1-h6 ｜ 标题
-   a ｜ 链接，注意安全隐患 rel noref noopener ｜ 使用 a 标签下载｜ 电话、邮件链接｜
-   ol, ul, li ｜ 列表
-   br, hr ｜ 换行，分割线
-   article, section, p ｜ 文本常用元素
-   code, pre, var ｜ 代码块相关
-   blockquote, q, cite ｜ 引用
-   nav, main, aside, footer, header ｜ 语义化
-   div, span ｜ 一把梭双剑客

## 其它标签

-   progress, meter ｜ 进度条
-   map, area ｜ 热区
-   dl, dt, dd, dfn, abbr ｜ 描述列表, 定义, 缩写
-   details, summary ｜ 描述展开
-   data, time
-   figure figcaption
-   dialog
-   ruby, rp, rt ｜ 为东亚字符注音/注释
-   address ins del i b kbd mark strong s sub sup small ｜ 语义化
