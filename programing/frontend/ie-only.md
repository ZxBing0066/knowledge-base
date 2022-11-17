# 基本只有 IE 能用的特性和语法列表

主要为 IE 11 和 chrome 的一些差异，为了部分只能 IE 使用的网站向 chrome 兼容。

## IE 独有的

### ActiveXObject

-   https://en.wikipedia.org/wiki/ActiveX
-   https://learn.microsoft.com/en-us/previous-versions/windows/desktop/automat/activex-objects
-   http://help.dottoro.com/ljiujjib.php

ActiveXObject 是 IE 提供的用于操控 window 应用程序的一系列接口。

关键字：ActiveXObject

### attachEvent

https://www.oreilly.com/library/view/javascript-the-definitive/0596101996/re278.html

关键字：attachEvent

### IE 判定注释

https://en.wikipedia.org/wiki/Conditional_comment

### Visual Filters and Transitions Reference

https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/ms532853(v=vs.85)

不知道是什么但是 IE 9 就已经抛弃了，不需要关注

## 基本只有 IE 能用的

### CSS Exclusions Level 1

CSS 排斥

-   https://www.w3.org/TR/css3-exclusions/

关键字：wrap-flow

### Input Method Editor API

当前输入法获取

-   https://www.w3.org/TR/ime-api/

关键字：

-   msGetInputContext
-   getCompositionAlternatives
-   inputMethodContext

### CSS Regions

将内容浮动到多个元素中

-   https://www.w3.org/TR/css-regions-1/

关键字：

-   region-fragment
-   flow-from
-   flow-into

### CSS Device Adaptation

通过 @viewport 定义 viewport

-   https://www.w3.org/TR/css-device-adapt/

关键字：@viewport

### CSS3 Multiple column layout

多列布局

-   https://www.w3.org/TR/css-multicol-1/

关键字：

-   column-break
-   column-fill

### X-Frame-Options HTTP header

HTTP 头 X-Frame-Options

-   https://www.rfc-editor.org/rfc/rfc7034

关键字：X-Frame-Options

### TLS 1.1

https tls 协议版本

### display: run-in

关键字：display: run-in

### Offline web applications

通过 manifest 定义离线应用

### Audio Tracks

-   https://html.spec.whatwg.org/multipage/media.html#audiotracklist-and-videotracklist-objects

关键字：track

### Efficient Script Yielding: setImmediate()

延时操作

关键字：setImmediate

### SPDY protocol

SPDY 协议

### Resource Hints: Lazyload

定义资源的 lazyload

关键字：lazyload

### JPEG XR image format

XR 格式图片

### EOT - Embedded OpenType fonts

EOT 格式字体

关键字：eot

### CSS text-justify

关键字：text-align: justify

### HEVC/H.265 video format

HEVC 视频格式

### 外部元素嵌入

embed 和 object 两个标签用于在浏览器中插入外部控件，一般而言 ie 只支持 object 标签，非 ie 只支持 embed 标签。

## 实测

### fieldset

chrome 中 fieldset 会被内部容器撑开，无法固定宽度滚动，且可能导致部分内容不展示。

-   https://stackoverflow.com/questions/7434756/overflow-and-text-overflow-within-fieldsets

解决方案：

-   fieldset min-width: 0
-   fieldset min-inline-size: auto

### file

IE 的 file input 在触发时会阻塞 js 线程的运行，所以如下代码：

```js
var selectFile = function () {
    input.click();
    var files = input.files;
};
```

在 IE 下可以拿到的是选择后的值，但是在 chrome 中拿到的是选择前的值。

## 参考资料

-   https://caniuse.com/?search=Internet%20Explorer
-   https://caniuse.com/?compare=chrome+100,ie+11&compareCats=all
