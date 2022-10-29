# 一些概念

## 标签语义化

｜ 语义化有助搜索引擎优化、无障碍阅读，在 CSS 失败是提供较好的结构

## 无障碍 🔥

｜ 方便屏幕阅读、无障碍阅读，｜ 语义化标签, role, aria-\*, 键盘导航，屏幕阅读器 等

## HTML5, H5

｜ HTML5 指代的是最新的 HTML5 标准，差不多时间崛起的 CSS3、ES5、移动端网页，国内当时很多做移动端页面的会说使用 HTML5 去
做，简写 H5，然后逐渐 H5 就指代使用 HTML5、CSS3、ES5 去编写移动端页面。

### 如何在老浏览器兼容 HTML5 标签

｜ https://github.com/aFarkas/html5shiv ｜ 原理：对自定义元素调用 createElement 后，浏览器将可以识别该元素并可应用样式

## web-components🔥

-   registerElement, customElements
-   创建自定义标签 https://www.html5rocks.com/zh/tutorials/webcomponents/customelements/
-   :unresolved 防闪烁
-   shadow-dom 做封装和样式隔离
-   template slot 定义元素结构 ｜ template slot
-   浏览器支持检测和兼容
-   相关库
    -   http://x-tag.github.io/
    -   https://polymer-library.polymer-project.org/

## shadow-dom🔥

｜ 封装组件，隔离样式