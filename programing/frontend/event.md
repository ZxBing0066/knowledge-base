---
tags: [事件模型, 事件委托, 性能优化, 前端基础]
---

# 事件模型

浏览器的事件模型，捕获冒泡，监听，委托，属性。

## 捕获和冒泡

-   事件有两个阶段
    -   事件触发时先从最外层（html）开始一直到目标元素逐步触发，此为捕获阶段
    -   到达目标元素后会向最外层逐步触发，此为冒泡阶段
-   目标元素会触发两次事件，一次捕获、一次冒泡
-   部分老浏览器不支持捕获阶段
-   同一事件多个监听器会按照添加的顺序进行触发

## 事件监听

-   一般通过 addEventListener 和 onEvent 来监听事件
-   addEventListener 可以添加多个监听，onEvent 只能有一个
-   用完记得使用 removeListener 和 onEvent = null 销毁
-   可通过参数决定将事件监听添加到哪个阶段
-   通过 options.passive，可以告诉浏览器该事件不会被调用 preventDefault，浏览器可以更好的协调事件的处理。大部分浏览器在
    wheel、 mousewheel、touchstart、touchmove 时 passive 默认为 true
-   通过 options.once 可以让浏览器在触发一次该事件后自动移除事件监听
-   options.signal 接收一个 AbortSignal，在 AbortSignal 调用时浏览器会自动移除该事件监听

## 事件类型

详细列表参考见[详细事件列表](#参考资料)，常见的事件类型包括：

-   浏览器窗口的 load、unload
-   资源的 load、error、statechange
-   鼠标的 click、dbclick、mouseover、mousemove、mousedown、mouseup、wheel
-   移动端 touch
-   拖拽相关 drag、drop
-   focus
-   history
-   message
-   websocket
-   css animation、transition 动画的状态变化事件

## 事件委托

-   通过在最外层监听事件，然后使用 target 判定实际触发元素
-   可以大大减少监听器的数量和重复的事件监听、销毁操作
-   如果想监听的目标元素存在子元素可能需要在事件触发时不停向上层判定是否命中
-   常用于性能优化、事件统一管理等场景
-   大部分开源库如 react、vue 都使用事件委托来实现内部监听

## 其它

-   event.bubbles

    目标阶段可以会检查 event.bubbles，所以可以通过设置 event.bubbles 控制事件是否进入冒泡阶段

-   event.cancelable

    可通过 event.cancelable 来判定当前时间是否可以调用 preventDefault

-   拦截

    通过 event.stopPropagation 阻止事件继续冒泡

-   旁路拦截

    通过 event.stopImmediatePropagation 可以阻止同一个事件的其它监听函数的触发（优先级较高的事件监听函数依旧会触发）

-   默认行为

    通过 event.preventDefault 可以组织事件的默认行为，比如 a 标签的跳转、form 表单的提交等

-   事件断点

    可以通过 chrome devtool 中的事件断点方便的调试事件

-   target, currentTarget

    target 指向实际触发事件元素，currentTarget 指向事件绑定的元素

## 参考资料

-   事件模型互动学习网站：https://domevents.dev/
-   详细事件列表：https://developer.mozilla.org/en-US/docs/Web/Events
