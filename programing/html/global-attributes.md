---
tags: [基础]
---

# 全局属性

## 事件类

-   onchange ｜ 值变化
-   oninput ｜ 输入
-   onfocus onblur ｜ 聚焦 失焦
-   onkeydown onkeyup onkeypress ｜ 键盘按键
-   onclick ｜ 鼠标点击事件｜ 移动端点击也会触发｜
-   ondbclick ｜ 双击｜ 需注意双击会触发两次 onclick 事件，如果同时使用需要做好处理
-   onmousedown onmouseup onmouseenter onmouseleave onmouseout onmouseover onmousemove 鼠标点下 抬起 进入 离开 出去悬浮 移动
    -   enter leave 和 out over 的区别
-   ontouchstart ontouchmove ontouchend ontouchcancel ｜ 移动端触碰点击事件
-   oncontextmenu ｜ 右键菜单事件
-   ondrag ondragend ondragenter ondragleave ondragover ondragstart ondrop ｜ 拖拽相关事件

## 其它

-   contenteditable | 将元素变为可编辑，一般用作富文本编辑器
-   class | 类名
-   id | id，唯一值，部分浏览器可通过 window[id] 直接获取元素 |
-   title | 通用的无障碍属性，在对应元素 hover 一段时间后会展示给用户 |
-   autofocus | 自动聚焦
-   tabindex | 是否可聚焦，是否可通过键盘聚焦（tab 键） | | ​ 为负值则可聚焦，但是不可通过键盘聚焦 | ​0 代表可聚焦，可通过键盘聚焦，但是顺序由浏览器决
    定 | 正值表示可聚焦，可通过键盘聚焦，而且会按照值的顺序决定聚焦顺序，如果值一项按照位置来判断
-   data-\* | 数据属性，可使用 dataset 获取
-   hidden | 是否隐藏元素，浏览器默认样式 [hidden]: { display: none }
-   style
-   draggable | 是否可拖拽
-   dir aria-\* accesskey 等 | 无障碍、不常用的属性
